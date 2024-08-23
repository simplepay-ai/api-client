import type { Invoice } from '../models';
import type { InvoiceCreateErrors, InvoiceCreateRequest } from '../requests';
import { createHmac } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';

export default class InvoiceService extends BaseService {
    /**
     * Create new invoice
     */
    public async create(request: InvoiceCreateRequest): Promise<Invoice> {
        const response = await this.request('POST', null, this.toSnakeCase(request));

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
    public async get(id: string): Promise<Invoice> {
        const response = await this.request('GET', `/${id}`);

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
        const response = await this.request('DELETE', `/${id}`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Invoice;
    }

    /**
     * Get invoice from webhook
     *
     * @param body Raw webhook body
     * @param signature Content of `X-Signature` header
     */
    public fromWebhook(body: string, signature: string): Invoice {
        if (this.apiKey === null) {
            throw new Error('API key not set');
        }

        const hash = createHmac('sha256', this.apiKey).update(body).digest('hex');

        if (hash !== signature) {
            throw new Error('Invalid signature');
        }

        const data = this.toCamelCase(JSON.parse(body));

        return data as Invoice;
    }
}
