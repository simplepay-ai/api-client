import type { PAT } from '../models';
import type { PATCreateErrors, PATCreateRequest } from '../requests';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';

export default class UserPATService extends BaseService {
    public async list(): Promise<PAT[]> {
        const response = await this.request('GET', '?v=1');

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as PAT[];
    }

    public async create(request: PATCreateRequest): Promise<PAT> {
        const response = await this.request('POST', '?v=1', this.toSnakeCase(request));

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<PATCreateErrors>(data);
        }

        return data as PAT;
    }

    public async delete(id: string): Promise<true> {
        const response = await this.request('DELETE', `/${id}?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        return true;
    }
}
