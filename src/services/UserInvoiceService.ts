import type { Invoice } from '../models';
import type { UserInvoiceListErrors, UserInvoiceListRequest } from '../requests';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';

export default class UserInvoiceService extends BaseService {
    /**
     * List invoices
     */
    public async list(request: UserInvoiceListRequest = {}): Promise<Invoice[]> {
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

        return data as Invoice[];
    }
}
