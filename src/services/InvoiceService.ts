import type { Invoice } from '../models';
import type { InvoiceCreateRequest, InvoiceListRequest } from '../requests';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';
import { InvoiceCreateErrors, InvoiceListErrors } from '../responses';

export default class InvoiceService extends BaseService {
    /**
     * Create invoice
     */
    public async create(request: InvoiceCreateRequest): Promise<Invoice> {
        const response = await this.request('POST', '?v=2', this.toSnakeCase(request));

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<InvoiceCreateErrors>(data);
        }

        return data as Invoice;
    }

    /**
     * Get invoice by ID
     */
    public async get(id: string, app: boolean = false): Promise<Invoice> {
        const response = await this.request('GET', `/${id}?v=2&app=${app}`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Invoice;
    }

    /**
     * Cancel invoice by ID
     */
    public async cancel(id: string): Promise<Invoice> {
        const response = await this.request('DELETE', `/${id}?v=2`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Invoice;
    }

    /**
     * List invoices
     */
    public async list(request: InvoiceListRequest = {}): Promise<Invoice[]> {
        const query = new URLSearchParams();

        for (const [key, value] of Object.entries(this.toSnakeCase(request))) {
            query.append(key, value.toString());
        }

        const response = await this.request('GET', `?v=2&${query.toString()}`);

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<InvoiceListErrors>(data);
        }

        return data as Invoice[];
    }
}
