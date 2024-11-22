import type { InvoicePayload } from '../models';

export type InvoiceCreateProduct = {
    /**
     * Product ID
     *
     * @example '769f2cf4-0fa2-4f06-a22a-06525ec489a8'
     */
    id: string;

    /**
     * Products count
     *
     * @example 1
     */
    count: number;
};

export type InvoiceCreateRequest = {
    /**
     * Application ID
     *
     * @example 'deae9fe3-9f00-4c18-8b24-dbc86e142128'
     */
    appId: string;

    /**
     * Invoice type
     *
     * @example 'payment'
     */
    type: 'payment';

    /**
     * Parent invoice ID
     *
     * @example 'dd90187e-d1d0-405f-bf2f-242c15403297'
     */
    parentId?: string | null;

    /**
     * ID of end customer, who makes the payment
     *
     * @example '46778124-f9e0-4eba-ae1a-ecd5c0d9e90b'
     */
    clientId: string;

    /**
     * Fiat currency symbol (ISO 4217 alphabetic code)
     *
     * @example 'USD'
     * @see https://en.wikipedia.org/wiki/ISO_4217
     */
    currency: string;

    /**
     * Total in fiat currency
     *
     * @example 500
     */
    total?: number;

    /**
     * Custom data attached to invoice
     *
     * @example {
     *   someKey: 'someValue'
     * }
     */
    payload?: InvoicePayload | null;

    /**
     * Products
     */
    products?: InvoiceCreateProduct[];
};

export type InvoiceCreateErrors = {
    appId?: 'required' | 'uuid4' | 'invalid';
    type?: 'required' | 'oneof';
    parentId?: 'uuid4';
    clientId?: 'required' | 'ascii' | 'max' | 'invalid';
    currency?: 'required' | 'alpha' | 'uppercase' | 'invalid';
    total?: 'required_without' | 'numeric' | 'gte' | 'lte';
    payload?: 'len';
    products?: 'required_without' | 'min' | 'max' | 'invalid';
};
