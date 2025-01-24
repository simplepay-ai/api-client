import type { InvoiceStatus } from '../models';

export enum UserInvoiceListOrderBy {
    Status = 'status',
    CreatedAt = 'created_at'
}

export type UserInvoiceListRequest = {
    /**
     * Application ID
     *
     * @example 'deae9fe3-9f00-4c18-8b24-dbc86e142128'
     */
    appId?: string;

    /**
     * Invoice status
     *
     * @example 'success'
     */
    status?: InvoiceStatus;

    /**
     * Invoice creation timestamp, greater or equal
     *
     * @example '2024-07-31T00:48:53Z'
     */
    createdAtGte?: string;

    /**
     * Invoice creation timestamp, lower or equal
     *
     * @example '2024-08-31T00:49:28Z'
     */
    createdAtLte?: string;

    /**
     * Property to order results by
     */
    orderBy?: UserInvoiceListOrderBy;

    /**
     * Results order direction
     */
    order?: 'asc' | 'desc';
};

export type UserInvoiceListErrors = {
    appId?: 'uuid4';
    status?: 'oneof';
    createdAtGte?: 'datetime';
    createdAtLte?: 'datetime';
    orderBy?: 'oneof';
    order?: 'oneof';
};
