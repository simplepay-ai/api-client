import type { Invoice } from '../models/index';
import BaseChannel from '../BaseChannel';
import { InvoiceStatus } from '../models/index';

export default class InvoiceChannel extends BaseChannel {
    public on(status: InvoiceStatus, callback: (invoice: Invoice) => void): void {
        this.channel.bind(status, (i: object) => callback(this.toCamelCase(i) as Invoice));
    }
}
