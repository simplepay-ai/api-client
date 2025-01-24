import type { Invoice } from '../models';
import BaseService from '../BaseService';
import { HttpError } from '../errors';

export default class UserBillingService extends BaseService {
    /**
     * List billing invoices
     */
    public async list(): Promise<Invoice[]> {
        const response = await this.request('GET', `?v=1`);

        if (!response.ok) {
            throw new HttpError(response.status);
        }

        const data = this.toCamelCase(await response.json());

        return data as Invoice[];
    }
}
