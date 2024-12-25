# API Client

## Client initialization

Below is example of `Client` initialization and invoice creation

```typescript
import { Client, HttpError, InvoiceCreateErrors, ValidationError } from '@simplepay-ai/api-client';

const api = new Client({
    apiKey: '<place your API key here>'
});

try {
    const invoice = await api.invoice.create({
        // Application ID from console
        appId: '<place your App ID here>',

        type: 'payment',

        // ID of end customer, who makes the payment
        clientId: '46778124-f9e0-4eba-ae1a-ecd5c0d9e90b',

        // Fiat currency symbol (ISO 4217 alphabetic code)
        currency: 'USD',

        // Total in fiat currency
        total: 500
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

All other API methods may be called in similar way

> [!IMPORTANT]
> Do not expose your API key when using Client in frontend application
>
> `apiKey` parameter should only be set when using Client on server-side

## Available methods

### Fiat currencies

| Method          | Arguments | Return value                                  | Description            |
| :-------------- | :-------- | :-------------------------------------------- | :--------------------- |
| `currency.list` | none      | [`Promise<Currency[]>`](entities.md#currency) | Get fiat currency list |

### Cryptocurrencies

| Method                | Arguments                                                            | Return value                                              | Description             |
| :-------------------- | :------------------------------------------------------------------- | :-------------------------------------------------------- | :---------------------- |
| `cryptocurrency.list` | [`CryptocurrencyListRequest`](requests.md#cryptocurrencylistrequest) | [`Promise<Cryptocurrency[]>`](entities.md#cryptocurrency) | Get cryptocurrency list |

### Invoices

| Method           | Arguments                                                  | Return value                              | Description          |
| :--------------- | :--------------------------------------------------------- | :---------------------------------------- | :------------------- |
| `invoice.create` | [`InvoiceCreateRequest`](requests.md#invoicecreaterequest) | [`Promise<Invoice>`](entities.md#invoice) | Create new invoice   |
| `invoice.get`    | `string` Invoice ID                                        | [`Promise<Invoice>`](entities.md#invoice) | Get invoice by ID    |
| `invoice.cancel` | `string` Invoice ID                                        | [`Promise<Invoice>`](entities.md#invoice) | Cancel invoice by ID |
