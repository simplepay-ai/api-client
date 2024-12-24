import type { Transaction, TransactionEventType } from '../models';
import BaseChannel from '../BaseChannel';

export default class InvoiceTransactionChannel extends BaseChannel {
    public on(eventType: TransactionEventType, callback: (transaction: Transaction) => void): void {
        this.channel.bind(eventType, (i: object) => callback(this.toCamelCase(i) as Transaction));
    }
}
