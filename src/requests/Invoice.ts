import type { InvoicePayload } from '../models/index';

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
     * Wallet address from which customer made payment
     *
     * @example '0x41ce73496136A0072013B9187550e30841eDeD74'
     */
    from: string;

    /**
     * Cryptocurrency symbol
     *
     * @example 'USDT'
     */
    cryptocurrency: string;

    /**
     * Network symbol
     *
     * @example 'ethereum'
     */
    network: string;

    /**
     * Fiat currency symbol (ISO 4217 alphabetic code)
     *
     * @example 'USD'
     * @see https://en.wikipedia.org/wiki/ISO_4217
     */
    currency: string;

    /**
     * Price in fiat currency
     *
     * @example 500
     */
    price: number;

    /**
     * Custom data attached to invoice
     *
     * @example {
     *   someKey: 'someValue'
     * }
     */
    payload?: InvoicePayload | null;
};

export type InvoiceCreateErrors = {
    appId?: 'required' | 'uuid4' | 'invalid';
    type?: 'required' | 'oneof';
    parentId?: 'uuid4';
    clientId?: 'required' | 'ascii' | 'max' | 'invalid';
    from?: 'required' | 'alphanum' | 'invalid';
    cryptocurrency?: 'required' | 'alpha' | 'uppercase' | 'invalid';
    network?: 'required' | 'alpha' | 'lowercase' | 'invalid';
    currency?: 'required' | 'alpha' | 'uppercase' | 'invalid';
    price?: 'required' | 'numeric' | 'gte' | 'lte';
    payload?: 'len';
};
