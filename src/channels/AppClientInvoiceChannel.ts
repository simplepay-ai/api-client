import type { Invoice, InvoiceEventType } from '../models';
import BaseChannel from '../BaseChannel';

export default class AppClientInvoiceChannel extends BaseChannel {
    public on(eventType: InvoiceEventType, callback: (invoice: Invoice) => void): void {
        this.channel.bind(eventType, (i: object) => callback(this.toCamelCase(i) as Invoice));
    }
}
