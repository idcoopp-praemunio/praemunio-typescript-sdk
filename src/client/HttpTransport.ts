import { HttpLibrary, RequestContext, ResponseContext } from "../http/http";
import { IsomorphicFetchHttpLibrary } from "../http/isomorphic-fetch";
import { TokenManager } from "./TokenManager";
import { from } from "../rxjsStub";

export class PraemunioHttpTransport implements HttpLibrary {
  constructor(private readonly tokenManager: TokenManager) {}

  send(request: RequestContext): any {
    return from(this.sendWithAuth(request));
  }

  private async sendWithAuth(request: RequestContext): Promise<ResponseContext> {
    await this.tokenManager.ensureAccessToken();

    const accessToken = this.tokenManager.getAccessToken();
    if (accessToken) {
      request.setHeaderParam("Authorization", `Bearer ${accessToken}`);
    }

    const library = new IsomorphicFetchHttpLibrary();
    let response = await library.send(request).toPromise();

    if (response.httpStatusCode === 401) {
      await this.tokenManager.refreshTokens();

      const newToken = this.tokenManager.getAccessToken();
      if (newToken) {
        request.setHeaderParam("Authorization", `Bearer ${newToken}`);
      }

      response = await library.send(request).toPromise();
    }

    return response;
  }
}
