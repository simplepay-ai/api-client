import type { App } from '../models';
import BaseService from '../BaseService';
import { HttpError } from '../errors';
import { AppCryptocurrencyService } from './';

type Fetch = typeof fetch;

export default class AppService extends BaseService {
    public cryptocurrency: AppCryptocurrencyService;

    constructor(
        protected fetch: Fetch,
        protected apiBase: string
    ) {
        super(fetch, apiBase);

        this.cryptocurrency = new AppCryptocurrencyService(fetch, this.apiBase);
    }

    public async get(id: string): Promise<App> {
        const response = await this.request('GET', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as App;
    }
}
