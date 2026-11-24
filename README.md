# Praemunio TypeScript SDK

> Client officiel pour l'API Praemunio — TypeScript / JavaScript

## 📦 Installation

```bash
npm install @praemunio/sdk
```

Ou avec Yarn :

```bash
yarn add @praemunio/sdk
```

## 🚀 Quick Start (5 minutes)

### 1. Obtenir vos clés API

Récupérez vos clés depuis le [dashboard Praemunio](https://dashboard.praemunio.io) :
- **Public Key** : `pk_test_...` (sandbox) ou `pk_live_...` (production)
- **Secret Key** : `sk_test_...` (sandbox) ou `sk_live_...` (production)

### 2. Initialiser le client

```typescript
import { PraemunioClient } from '@praemunio/sdk';

// Mode sandbox (tests)
const client = PraemunioClient.sandbox('pk_test_xxx', 'sk_test_xxx');

// Mode production
// const client = PraemunioClient.live('pk_live_xxx', 'sk_live_xxx');
```

### 3. S'authentifier

```typescript
await client.authenticate();

console.log('Access token:', client.getAccessToken());
console.log('Refresh token:', client.getRefreshToken());
```

### 4. Premier appel API

```typescript
const api = client.createApi();

// Lister les workspaces
const result = await api.workspacesDriveGet();
console.log('Workspaces:', result);
```

### 5. Exemple complet

```typescript
import { PraemunioClient } from '@praemunio/sdk';

async function main() {
    // Initialiser le client (sandbox)
    const client = PraemunioClient.sandbox('pk_test_xxx', 'sk_test_xxx');

    // Authentification
    await client.authenticate();
    console.log('Authentifié avec succès !');

    // Premier appel API
    const api = client.createApi();
    const workspaces = await api.workspacesDriveGet();

    console.log('Workspaces:', workspaces);
}

main().catch(console.error);
```

## 🔐 Authentification

Le SDK gère automatiquement l'authentification et le refresh des tokens :

```typescript
// Authentification initiale
await client.authenticate();

// Le token est renouvelé automatiquement lors des appels API
// Vous pouvez aussi forcer le refresh :
await client.refresh();
```

## 🌍 Environnements

| Environnement | URL | Utilisation |
|---------------|-----|-------------|
| **Sandbox** | `https://sandbox-api.praemunio.org/api/v1` | Tests et développement |
| **Live** | `https://api.praemunio.org/api/v1` | Production |

```typescript
// Sandbox (par défaut)
const client = PraemunioClient.sandbox(publicKey, secretKey);

// Production
const client = PraemunioClient.live(publicKey, secretKey);
```

## 📚 Documentation complète

- [Documentation officielle TypeScript](https://docs.praemunio.io/sdk/typescript)
- [Référence API](https://docs.praemunio.io/api-reference)
- [Guide d'authentification](https://docs.praemunio.io/authentication)
- [Exemples](https://docs.praemunio.io/sdk/typescript/examples)

## 📋 Endpoints principaux

| Méthode | Endpoint | Description |
|---------|----------|-------------|
| `POST` | `/auth/auth-token` | Authentification |
| `GET` | `/workspaces/drive` | Lister les workspaces |
| `POST` | `/teams/create` | Créer une équipe |
| `GET` | `/folders/{id}` | Détails d'un dossier |
| `POST` | `/documents/archive` | Archiver un document |

## 🤝 Support

- 📖 [Documentation](https://docs.praemunio.io)
- 🐛 [Signaler un bug](https://github.com/praemunio/sdks/issues)
- 💬 [Discord](https://discord.gg/praemunio)
- 📧 [Email](mailto:support@praemunio.org)