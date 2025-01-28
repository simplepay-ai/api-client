export type TransactionCreateErrors = {
    invoiceId?: 'required' | 'uuid4' | 'invalid';
    from?: 'required' | 'alphanum' | 'invalid';
    cryptocurrency?: 'required' | 'alpha' | 'uppercase' | 'invalid';
    network?: 'required' | 'alpha' | 'lowercase' | 'invalid';
};

export type TransactionListErrors = {
    invoiceId?: 'required' | 'uuid4';
};
