import type { Invoice } from '../models';
import BaseChannel from '../BaseChannel';
import { InvoiceStatus } from '../models';

export default class InvoiceChannel extends BaseChannel {
    public on(status: InvoiceStatus, callback: (invoice: Invoice) => void): void {
        this.channel.bind(status, callback);
    }
}
