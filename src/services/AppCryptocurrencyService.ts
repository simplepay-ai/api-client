import BaseService from '../BaseService';
import { HttpError } from '../errors';
import { Cryptocurrency } from '../models';
import { AppCryptocurrencyUpdateItem } from '../requests';

export default class AppCryptocurrencyService extends BaseService {
    public async update(
        appId: string,
        request: AppCryptocurrencyUpdateItem[]
    ): Promise<Cryptocurrency[]> {
        const response = await this.request(
            'PUT',
            `/${appId}/cryptocurrency?v=1`,
            this.toSnakeCase(request)
        );

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Cryptocurrency[];
    }
}
