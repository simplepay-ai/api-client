import type { Cryptocurrency } from '../models/index';
import type { CryptocurrencyListErrors, CryptocurrencyListRequest } from '../requests/index';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors/index';

export default class CryptocurrencyService extends BaseService {
    /**
     * Get cryptocurrency list
     */
    public async list(request: CryptocurrencyListRequest = {}): Promise<Cryptocurrency[]> {
        const query = new URLSearchParams();

        for (const [key, value] of Object.entries(this.toSnakeCase(request))) {
            query.append(key, value.toString());
        }

        const response = await this.request('GET', `?${query.toString()}`);

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<CryptocurrencyListErrors>(data);
        }

        return data as Cryptocurrency[];
    }
}
