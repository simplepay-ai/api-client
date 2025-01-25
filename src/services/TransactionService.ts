import type { Transaction } from '../models';
import type {
    TransactionCreateErrors,
    TransactionCreateRequest,
    TransactionListErrors,
    TransactionListRequest
} from '../requests';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';

export default class TransactionService extends BaseService {
    /**
     * Create transaction
     */
    public async create(request: TransactionCreateRequest): Promise<Transaction> {
        const response = await this.request('POST', '?v=1', this.toSnakeCase(request));

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<TransactionCreateErrors>(data);
        }

        return data as Transaction;
    }

    /**
     * Get transaction by ID
     */
    public async get(id: string): Promise<Transaction> {
        const response = await this.request('GET', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Transaction;
    }

    /**
     * Cancel transaction by ID
     */
    public async cancel(id: string): Promise<Transaction> {
        const response = await this.request('DELETE', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Transaction;
    }

    /**
     * List transactions
     */
    public async list(request: TransactionListRequest): Promise<Transaction[]> {
        const query = new URLSearchParams();

        for (const [key, value] of Object.entries(this.toSnakeCase(request))) {
            query.append(key, value.toString());
        }

        const response = await this.request('GET', `?v=1&${query.toString()}`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<TransactionListErrors>(data);
        }

        return this.toCamelCase(data) as Transaction[];
    }
}
