import type { Product } from '../models';
import BaseService from '../BaseService';
import { HttpError } from '../errors';

export default class ProductService extends BaseService {
    public async list(appId: string): Promise<Product[]> {
        const response = await this.request('GET', `?v=1&app_id=${appId}`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Product[];
    }

    public async get(id: string): Promise<Product> {
        const response = await this.request('GET', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as Product;
    }
}
