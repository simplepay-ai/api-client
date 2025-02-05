import type { UserAddress } from '../models';
import type { UserAddressCreateRequest, UserAddressUpdateRequest } from '../requests';
import type { UserAddressCreateErrors, UserAddressUpdateErrors } from '../responses';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';

export default class UserAddressService extends BaseService {
    public async list(): Promise<UserAddress[]> {
        const response = await this.request('GET', '?v=1');

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as UserAddress[];
    }

    public async create(request: UserAddressCreateRequest): Promise<UserAddress> {
        const response = await this.request('POST', '?v=1', this.toSnakeCase(request));

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<UserAddressCreateErrors>(data);
        }

        return data as UserAddress;
    }

    public async get(id: string): Promise<UserAddress> {
        const response = await this.request('GET', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as UserAddress;
    }

    public async update(id: string, request: UserAddressUpdateRequest): Promise<UserAddress> {
        const response = await this.request('PUT', `/${id}?v=1`, this.toSnakeCase(request));

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<UserAddressUpdateErrors>(data);
        }

        return data as UserAddress;
    }

    public async delete(id: string): Promise<true> {
        const response = await this.request('DELETE', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        return true;
    }
}
