import type { UserInvoiceLinkRequest, UserInvoiceListRequest } from '../requests';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';
import { UserInvoice } from '../models';
import { UserInvoiceLinkErrors, UserInvoiceListErrors } from '../responses';

export default class UserInvoiceService extends BaseService {
    /**
     * List invoices
     */
    public async list(request: UserInvoiceListRequest = {}): Promise<UserInvoice[]> {
        const query = new URLSearchParams();

        for (const [key, value] of Object.entries(this.toSnakeCase(request))) {
            query.append(key, value.toString());
        }

        const response = await this.request('GET', `?v=1&${query.toString()}`);

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<UserInvoiceListErrors>(data);
        }

        return data as UserInvoice[];
    }

    public async link(request: UserInvoiceLinkRequest): Promise<UserInvoice> {
        const response = await this.request('POST', '?v=1', this.toSnakeCase(request));

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<UserInvoiceLinkErrors>(data);
        }

        return data as UserInvoice;
    }
}
