# SimplePay API Client

## Usage

### 1. Reference organization namespace in project

Add following line to `.npmrc` in project root directory:

```text
@simple-technologies-llc:registry=https://npm.pkg.github.com
```

### 2. Authenticate in GitHub Packages

Read [this guide](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token) about how to authenticate

### 3. Install package as usual

```bash
npm install --save-dev @simple-technologies-llc/api-client
```

### 4. Use `Client` or `WsClient` classes from package

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
