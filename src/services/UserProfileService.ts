import type { UserProfile } from '../models';
import type { UserProfileUpdateRequest } from '../requests';
import type { UserProfileUpdateErrors } from '../responses';
import { StatusCodes } from 'http-status-codes';
import BaseService from '../BaseService';
import { HttpError, ValidationError } from '../errors';

export default class UserProfileService extends BaseService {
    public async get(): Promise<UserProfile> {
        const response = await this.request('GET', '?v=1');

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = await response.json();

        return this.toCamelCase(data) as UserProfile;
    }

    public async update(request: UserProfileUpdateRequest): Promise<UserProfile> {
        const response = await this.request('PUT', '?v=1', this.toSnakeCase(request));

        if (!response.ok && response.status !== StatusCodes.BAD_REQUEST) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        if (response.status === StatusCodes.BAD_REQUEST) {
            throw new ValidationError<UserProfileUpdateErrors>(data);
        }

        return data as UserProfile;
    }
}
