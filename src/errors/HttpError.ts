import type { StatusCodes } from 'http-status-codes';
import { getReasonPhrase } from 'http-status-codes';

export default class HttpError extends Error {
    constructor(public code: StatusCodes) {
        super(getReasonPhrase(code));
        this.name = this.constructor.name;
    }
}
