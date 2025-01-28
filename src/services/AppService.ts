import type { ClientState } from '../';
import type { App, PublicApp } from '../models';
import type { AppCreateErrors, AppUpdateErrors } from '../responses';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';
import { AppCreateRequest, AppUpdateRequest } from '../requests';
import { AppCryptocurrencyService } from './';

type Fetch = typeof fetch;

export default class AppService extends BaseService {
    public cryptocurrency: AppCryptocurrencyService;

    constructor(
        protected state: ClientState,
        protected fetch: Fetch,
        protected apiBase: string
    ) {
        super(state, fetch, apiBase);

        this.cryptocurrency = new AppCryptocurrencyService(state, fetch, this.apiBase);
    }

    public async list(): Promise<App[]> {
        const response = await this.request('GET', '?v=1');

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as App[];
    }

    public async create(request: AppCreateRequest): Promise<App> {
        const response = await this.request('POST', '?v=1', this.toSnakeCase(request));

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<AppCreateErrors>(data);
        }

        return data as App;
    }

    public async get(id: string): Promise<App | PublicApp> {
        const response = await this.request('GET', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as App;
    }

    public async update(id: string, request: AppUpdateRequest): Promise<App> {
        const response = await this.request('PUT', `/${id}?v=1`, this.toSnakeCase(request));

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<AppUpdateErrors>(data);
        }

        return data as App;
    }

    public async delete(id: string): Promise<true> {
        const response = await this.request('DELETE', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        return true;
    }
}
