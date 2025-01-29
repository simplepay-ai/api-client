export type UserInvoiceListErrors = {
    appId?: 'uuid4';
    status?: 'oneof';
    createdAtGte?: 'datetime';
    createdAtLte?: 'datetime';
    orderBy?: 'oneof';
    order?: 'oneof';
};

export type UserInvoiceLinkErrors = {
    invoiceId?: 'required' | 'uuid4' | 'invalid' | 'linked';
};
