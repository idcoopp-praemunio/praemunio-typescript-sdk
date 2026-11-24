# Praemunio TypeScript SDK

TypeScript/JavaScript client for the Praemunio public API.

## Installation

```bash
npm install @praemunio/sdk
```

## Quick start

```ts
import { PraemunioClient } from "@praemunio/sdk";

const client = PraemunioClient.sandbox(
  "pk_test_...",
  "sk_test_..."
);

await client.authenticate();

const config = client.createConfiguration();
const workspacesApi = new (require("@praemunio/sdk").WorkspacesApi)(config);

const drive = await workspacesApi.drive();
console.log(drive);
```

## Environments

```ts
const sandboxClient = PraemunioClient.sandbox(publicKey, secretKey);
const liveClient = PraemunioClient.live(publicKey, secretKey);
```

Or:

```ts
const client = PraemunioClient.fromEnvironment(
  PraemunioEnvironment.Sandbox,
  publicKey,
  secretKey
);
```

## Authentication

The SDK exchanges `publicKey` and `secretKey` for an access token and refresh token.

```ts
await client.authenticate();
```

The client automatically:
- injects `Authorization: Bearer <access_token>`
- refreshes the token before expiration
- retries once after a `401`

## Available APIs

- `AuthenticationApi`
- `DocumentsApi`
- `FoldersApi`
- `TeamsApi`
- `TeamsMembersApi`
- `WorkspacesApi`

## Example

```ts
const client = PraemunioClient.sandbox(publicKey, secretKey);
await client.authenticate();

const config = client.createConfiguration();
const documentsApi = new DocumentsApi(config);

const documents = await documentsApi.list({
  workspace_id: "workspace-uuid"
});

console.log(documents);
```

## Build

```bash
npm install
npm run build
```

## Notes

- The SDK is generated from the official OpenAPI specification.
- The public API reference is available in `docs/API REFERENCE.openapi.json`.
- Production URL: `https://api.praemunio.org/api/v1`
- Sandbox URL: `https://sandbox-api.praemunio.org/api/v1`
