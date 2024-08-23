import camelcaseKeys from 'camelcase-keys';
import { Channel } from 'pusher-js';

export default class BaseChannel {
    constructor(protected channel: Channel) {}

    protected toCamelCase(obj: any): object {
        return camelcaseKeys(obj, {
            deep: true
        });
    }
}
