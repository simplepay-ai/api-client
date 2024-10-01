import type { Currency } from '../models/index';
import BaseService from '../BaseService';
import { HttpError } from '../errors/index';

export default class CurrencyService extends BaseService {
    /**
     * Get fiat currency list
     */
    public async list(): Promise<Currency[]> {
        const response = await this.request('GET');

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Currency[];
    }
}
