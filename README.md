# SimplePay API Client

## Usage

### 1. Install package

```bash
npm install --save-dev @simplepay-ai/api-client
```

### 2. Use `Client` or `WsClient` classes from package

See documentation for [`Client`](docs/client.md) or [`WsClient`](docs/ws-client.md)

## Development

### Ensure proper code style

Run following command to format your code before commit:

```bash
npm run format
```

## Publishing

### 1. Increment version

Package uses [Semantic Versioning](https://semver.org). You should increment package version before publishing

If you introduce breaking changes, run:

```bash
npm version major
```

If your changes is backward-compatible, run:

```bash
npm version minor
```

If you fixed a bug, run:

```bash
npm version patch
```

### 2. Push to repository with tags

```bash
git push origin main --tags
```

New release and package version will be created automatically
