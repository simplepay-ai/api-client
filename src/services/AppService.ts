import type { App } from '../models';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';

type Fetch = typeof fetch;

export default class AppService extends BaseService {
    public async get(id: string): Promise<App> {
        const response = await this.request('GET', `/${id}`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as App;
    }
}
