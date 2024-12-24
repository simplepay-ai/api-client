import { App, Currency, Product } from './';

export enum InvoiceEventType {
    /**
     * Invoice created
     */
    Created = 'created',

    /**
     * Invoice succeeded
     */
    Success = 'success',

    /**
     * Invoice canceled
     *
     * By end customer or merchant
     */
    Canceled = 'canceled'
}

export enum InvoiceStatus {
    /**
     * Invoice active
     */
    Active = 'active',

    /**
     * Invoice closed (without specific reason)
     */
    Closed = 'closed',

    /**
     * Invoice succeeded
     *
     * Paid service may be granted to end customer on this status
     */
    Success = 'success',

    /**
     * Invoice canceled
     *
     * By end customer or merchant
     */
    Canceled = 'canceled'
}

export interface InvoicePayload {
    [key: string]: any;
}

export interface InvoiceProduct {
    /**
     * Product
     */
    product: Product;

    /**
     * Count
     *
     * @example 1
     */
    count: number;
}

export default interface Invoice {
    /**
     * Invoice ID
     *
     * @example '6ef3cc15-24ae-4192-9744-a9017ed153cc'
     */
    id: string;

    /**
     * Parent invoice ID
     *
     * @example 'dd90187e-d1d0-405f-bf2f-242c15403297'
     */
    parentId: string | null;

    /**
     * ID of end customer, who makes the payment
     *
     * @example '46778124-f9e0-4eba-ae1a-ecd5c0d9e90b'
     */
    clientId: string;

    /**
     * Invoice total in fiat currency
     *
     * @example '500.00'
     */
    total: string;

    /**
     * Invoice paid amount in fiat currency
     *
     * @example '499.21'
     */
    paid: string;

    /**
     * Invoice type
     *
     * @example 'payment'
     */
    type: 'payment';

    /**
     * Invoice status
     *
     * @example 'success'
     */
    status: InvoiceStatus;

    /**
     * Invoice creation timestamp
     *
     * @example '2024-07-31T00:48:53Z'
     */
    createdAt: string;

    /**
     * Invoice update timestamp
     *
     * @example '2024-07-31T00:49:28Z'
     */
    updatedAt: string;

    /**
     * Invoice fiat currency
     */
    currency: Currency;

    /**
     * Custom data attached to invoice
     *
     * @example {
     *   someKey: 'someValue'
     * }
     */
    payload: InvoicePayload | null;

    /**
     * Invoice products
     */
    products: InvoiceProduct[];

    /**
     * App invoice related to
     *
     * To get invoice with this field, pass `app: true` to `invoice.get` method
     */
    app?: App;
}
