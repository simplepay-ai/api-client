import type { App } from '../models';
import BaseService from '../BaseService';
import { HttpError } from '../errors';

export default class AppService extends BaseService {
    public async get(id: string): Promise<App> {
        const response = await this.request('GET', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as App;
    }
}
