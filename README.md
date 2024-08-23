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

### 4. Create Client and make API calls

#### Invoice creation example

```typescript
import {
    Client,
    HttpError,
    InvoiceCreateErrors,
    ValidationError
} from '@simple-technologies-llc/api-client';

const api = new Client({
    apiKey: '<place your API key here>'
});

try {
    const invoice = await api.invoice.create({
        type: 'payment',

        // ID of end customer, who makes the payment
        clientId: '46778124-f9e0-4eba-ae1a-ecd5c0d9e90b',

        // Wallet address from which customer made payment
        from: '0x41ce73496136A0072013B9187550e30841eDeD74',

        // Cryptocurrency symbol
        cryptocurrency: 'USDT',

        // Network symbol
        network: 'ethereum',

        // Fiat currency symbol (ISO 4217 alphabetic code)
        currency: 'USD',

        // Price in fiat currency
        price: 500
    });

    console.log(invoice);
} catch (e) {
    if (e instanceof ValidationError) {
        const error = e as ValidationError<InvoiceCreateErrors>;

        console.log(error.errors);
    }

    if (e instanceof HttpError) {
        const error = e as HttpError;

        console.log(error.code);
    }
}
```

#### Subscription to invoice updates example

```typescript
import { InvoiceStatus, WsClient } from '@simple-technologies-llc/api-client';

const ws = new WsClient();

// Invoice ID, returned by api.invoice.create() method
const invoiceId = '6ef3cc15-24ae-4192-9744-a9017ed153cc';

const invoice = ws.invoice(invoiceId);

invoice.on(InvoiceStatus.Confirming, (invoice) => {
    // Invoice paid, and awaiting confirmation in blockchain
    console.log(invoice);
});

invoice.on(InvoiceStatus.Success, (invoice) => {
    // Invoice successfully paid
    console.log(invoice);
});
```

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
