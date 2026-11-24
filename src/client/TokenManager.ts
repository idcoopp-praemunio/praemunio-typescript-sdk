import { IsomorphicFetchHttpLibrary } from "../http/isomorphic-fetch";
import { RequestContext, HttpMethod, ResponseContext } from "../http/http";

interface TokenPair {
  access_token: string;
  refresh_token: string;
  token_type?: string;
  expires_in?: number;
  refresh_expires_in?: number;
}

interface ApiResponse<T> {
  success: boolean;
  message: string;
  result: T | null;
  errors?: { code?: string; [key: string]: any } | null;
  statusCode?: number;
}

export class TokenManager {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private accessExpiresAt = 0;
  private refreshPromise: Promise<void> | null = null;

  constructor(
    private readonly publicKey: string,
    private readonly secretKey: string,
    private readonly baseUrl: string,
  ) {}

  async authenticate(): Promise<void> {
    const response = await this.postJson<TokenPair>("/auth/auth-token", {
      publicKey: this.publicKey,
      secretKey: this.secretKey,
    });

    if (!response.success || !response.result) {
      throw new Error(
        `Authentication failed (${response.errors?.code || "unknown"}): ${response.message}`,
      );
    }

    this.applyTokenPair(response.result);
  }

  async refreshTokens(): Promise<void> {
    if (!this.refreshToken) {
      await this.authenticate();
      return;
    }

    try {
      const response = await this.postJson<TokenPair>("/auth/refresh-token", {
        refresh_token: this.refreshToken,
      });

      if (!response.success || !response.result) {
        throw new Error(
          `Refresh failed (${response.errors?.code || "unknown"}): ${response.message}`,
        );
      }

      this.applyTokenPair(response.result);
    } catch {
      this.accessToken = null;
      this.refreshToken = null;
      await this.authenticate();
    }
  }

  async ensureAccessToken(): Promise<string> {
    if (!this.accessToken || Date.now() >= this.accessExpiresAt) {
      await this.runSingleRefresh(async () => {
        if (this.refreshToken) {
          await this.refreshTokens();
        } else {
          await this.authenticate();
        }
      });
    }

    if (!this.accessToken) {
      throw new Error("Unable to obtain an access token");
    }

    return this.accessToken;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getRefreshToken(): string | null {
    return this.refreshToken;
  }

  private applyTokenPair(pair: TokenPair): void {
    this.accessToken = pair.access_token;
    this.refreshToken = pair.refresh_token;

    const expiresInMs = (pair.expires_in || 28800) * 1000;
    this.accessExpiresAt = Date.now() + expiresInMs - 30_000;
  }

  private async runSingleRefresh(task: () => Promise<void>): Promise<void> {
    if (this.refreshPromise) {
      await this.refreshPromise;
      return;
    }

    this.refreshPromise = task().finally(() => {
      this.refreshPromise = null;
    });

    await this.refreshPromise;
  }

  private async postJson<T>(path: string, body: any): Promise<ApiResponse<T>> {
    const request = new RequestContext(`${this.baseUrl}${path}`, HttpMethod.POST);
    request.setHeaderParam("Content-Type", "application/json");
    request.setBody(JSON.stringify(body));

    const library = new IsomorphicFetchHttpLibrary();
    const response = await library.send(request).toPromise();
    const text = await response.body.text();

    try {
      return JSON.parse(text) as ApiResponse<T>;
    } catch {
      throw new Error(`Invalid JSON response from ${path}: ${text}`);
    }
  }
}
