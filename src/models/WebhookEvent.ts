import { Invoice, Transaction } from './';

export enum WebhookEventType {
    /**
     * Invoice created
     */
    InvoiceCreated = 'invoice.created',

    /**
     * Invoice succeeded
     *
     * Paid service may be granted to end customer on this event
     */
    InvoiceSuccess = 'invoice.success',

    /**
     * Invoice canceled
     *
     * By end customer or merchant
     */
    InvoiceCanceled = 'invoice.canceled',

    /**
     * Transaction created and preparing for future processing
     */
    TransactionCreated = 'transaction.created',

    /**
     * System is ready for accepting payment
     *
     * End customer allowed to send cryptocurrency
     */
    TransactionProcessing = 'transaction.processing',

    /**
     * Transaction found in blockchain
     *
     * System awaiting for some amount of new blocks to be mined for safety
     *
     * `hash` and `block` fields in transaction was filled on this event
     */
    TransactionConfirming = 'transaction.confirming',

    /**
     * Transaction succeeded
     */
    TransactionSuccess = 'transaction.success',

    /**
     * Transaction rejected
     *
     * Transaction was failed, or another issue was happen
     */
    TransactionRejected = 'transaction.rejected',

    /**
     * Transaction canceled
     */
    TransactionCanceled = 'transaction.canceled',

    /**
     * Transaction expired
     *
     * End customer does not send transaction in time
     */
    TransactionExpired = 'transaction.expired'
}

export type WebhookEvent = {
    /**
     * Event ID
     */
    id: string;
} & (
    | {
          /**
           * Event type
           */
          type:
              | WebhookEventType.InvoiceCreated
              | WebhookEventType.InvoiceCanceled
              | WebhookEventType.InvoiceSuccess;

          /**
           * Event data
           */
          data: Invoice;
      }
    | {
          /**
           * Event type
           */
          type:
              | WebhookEventType.TransactionCreated
              | WebhookEventType.TransactionCanceled
              | WebhookEventType.TransactionConfirming
              | WebhookEventType.TransactionProcessing
              | WebhookEventType.TransactionSuccess
              | WebhookEventType.TransactionRejected;

          /**
           * Event data
           */
          data: Transaction;
      }
);
