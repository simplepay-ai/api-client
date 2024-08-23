import type { Cryptocurrency } from '../models';
import type { CryptocurrencyListRequest } from '../requests';
import BaseService from '../BaseService';
import { HttpError } from '../errors';

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

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Cryptocurrency[];
    }
}
