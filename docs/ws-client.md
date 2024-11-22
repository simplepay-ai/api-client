# WebSocket Client

## Client initialization

Below is example of `WsClient` initialization and subscription to invoice updates

```typescript
import { TransactionStatus, WsClient } from '@simplepay-ai/api-client';

const ws = new WsClient();

// Invoice ID, returned by api.invoice.create() method
const invoiceId = '6ef3cc15-24ae-4192-9744-a9017ed153cc';

const invoice = ws.invoice(invoiceId);

invoice.on(TransactionStatus.Confirming, (invoice) => {
    // Invoice paid, and awaiting confirmation in blockchain
    console.log(invoice);
});

invoice.on(TransactionStatus.Success, (invoice) => {
    // Invoice successfully paid
    console.log(invoice);
});
```

For list of available fields in callback payload, see [`Invoice`](entities.md#invoice)
