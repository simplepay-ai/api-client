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

export type InvoiceListErrors = {
    appId?: 'required' | 'uuid4';
    status?: 'oneof';
    clientId?: 'ascii' | 'max';
};
