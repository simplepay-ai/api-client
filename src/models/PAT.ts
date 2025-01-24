export enum PATScope {
    AppRead = 'app:read',
    AppWrite = 'app:write',
    AppAddressRead = 'app.address:read',
    AppAddressWrite = 'app.address:write',
    AppCryptocurrencyWrite = 'app.cryptocurrency:write',
    InvoiceRead = 'invoice:read',
    ProductWrite = 'product:write',
    UserBillingRead = 'user.billing:read',
    UserInvoiceRead = 'user.invoice:read',
    UserPATRead = 'user.pat:read',
    UserPATWrite = 'user.pat:write'
}

export default interface PAT {
    /**
     * Token ID
     *
     * @example 'e35e8550-431c-40e6-a32d-94d7ac475f05'
     */
    id: string;

    /**
     * Token name
     */
    name: string;

    /**
     * Token
     */
    token?: string;

    /**
     * Token scopes
     */
    scopes: PATScope[];

    /**
     * Token creation timestamp
     *
     * @example '2024-07-31T00:48:53Z'
     */
    createdAt: string;
}
