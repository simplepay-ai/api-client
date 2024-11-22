export type TransactionCreateRequest = {
    /**
     * Invoice ID
     *
     * @example '769f2cf4-0fa2-4f06-a22a-06525ec489a8'
     */
    invoiceId: string;

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
};

export type TransactionListRequest = {
    /**
     * Invoice ID
     *
     * @example '769f2cf4-0fa2-4f06-a22a-06525ec489a8'
     */
    invoiceId: string;
};

export type TransactionCreateErrors = {
    invoiceId?: 'required' | 'uuid4' | 'invalid';
    from?: 'required' | 'alphanum' | 'invalid';
    cryptocurrency?: 'required' | 'alpha' | 'uppercase' | 'invalid';
    network?: 'required' | 'alpha' | 'lowercase' | 'invalid';
};
