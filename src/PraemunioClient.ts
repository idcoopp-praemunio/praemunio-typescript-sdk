import { createConfiguration, Configuration } from "./configuration";
import { serverSandbox, serverLive, BaseServerConfiguration, PraemunioEnvironment, getServerForEnvironment } from "./servers";
import { TokenManager } from "./client/TokenManager";
import { PraemunioHttpTransport } from "./client/HttpTransport";
import { HttpMethod } from "./http/http";

export class PraemunioClient {
  private readonly baseUrl: string;
  private readonly tokenManager: TokenManager;
  private readonly transport: PraemunioHttpTransport;

  constructor(
    publicKey: string,
    secretKey: string,
    baseServer: BaseServerConfiguration = serverSandbox,
  ) {
    this.baseUrl = baseServer.makeRequestContext("", HttpMethod.GET).getUrl().replace(/\/$/, "");
    this.tokenManager = new TokenManager(publicKey, secretKey, this.baseUrl);
    this.transport = new PraemunioHttpTransport(this.tokenManager);
  }

  async authenticate(): Promise<void> {
    await this.tokenManager.authenticate();
  }

  async refreshTokens(): Promise<void> {
    await this.tokenManager.refreshTokens();
  }

  static sandbox(publicKey: string, secretKey: string): PraemunioClient {
    return new PraemunioClient(publicKey, secretKey, serverSandbox);
  }

  static live(publicKey: string, secretKey: string): PraemunioClient {
    return new PraemunioClient(publicKey, secretKey, serverLive);
  }

  static fromEnvironment(
    environment: PraemunioEnvironment,
    publicKey: string,
    secretKey: string,
  ): PraemunioClient {
    return new PraemunioClient(publicKey, secretKey, getServerForEnvironment(environment));
  }

  createConfiguration(): Configuration {
    return createConfiguration({
      baseServer: serverSandbox,
      httpApi: this.transport,
      authMethods: {},
    });
  }

  createApi<T>(ApiConstructor: new (configuration: Configuration) => T): T {
    return new ApiConstructor(this.createConfiguration());
  }

  getAccessToken(): string | null {
    return this.tokenManager.getAccessToken();
  }

  getRefreshToken(): string | null {
    return this.tokenManager.getRefreshToken();
  }
}
