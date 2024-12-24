import { Cryptocurrency, Network } from './';

export enum TransactionEventType {
    /**
     * Transaction created and preparing for future processing
     */
    Created = 'created',

    /**
     * System is ready for accepting payment
     *
     * End customer allowed to send cryptocurrency
     */
    Processing = 'processing',

    /**
     * Transaction found in blockchain
     *
     * System awaiting for some amount of new blocks to be mined for safety
     *
     * `hash` and `block` fields in transaction was filled on this event
     */
    Confirming = 'confirming',

    /**
     * Transaction succeeded
     */
    Success = 'success',

    /**
     * Transaction rejected
     *
     * Transaction was failed, or another issue was happen
     */
    Rejected = 'rejected',

    /**
     * Transaction canceled
     */
    Canceled = 'canceled',

    /**
     * Transaction expired
     *
     * End customer does not send transaction in time
     */
    Expired = 'expired'
}

export enum TransactionStatus {
    /**
     * Transaction created and preparing for future processing
     */
    Created = 'created',

    /**
     * System is ready for accepting payment
     *
     * End customer allowed to send cryptocurrency
     */
    Processing = 'processing',

    /**
     * Transaction found in blockchain
     *
     * System awaiting for some amount of new blocks to be mined for safety
     *
     * `hash` and `block` fields in transaction was filled on this status
     */
    Confirming = 'confirming',

    /**
     * Transaction succeeded
     */
    Success = 'success',

    /**
     * Transaction rejected
     *
     * Transaction was failed, or another issue was happen
     */
    Rejected = 'rejected',

    /**
     * Transaction canceled
     */
    Canceled = 'canceled',

    /**
     * Transaction expired
     *
     * End customer does not send transaction in time
     */
    Expired = 'expired'
}

export default interface Transaction {
    /**
     * Transaction ID
     *
     * @example '1b87022b-e14f-4325-9317-732663ce900d'
     */
    id: string;

    /**
     * Invoice ID
     *
     * @example '6ef3cc15-24ae-4192-9744-a9017ed153cc'
     */
    invoiceId: string;

    /**
     * Wallet address from which customer made payment
     *
     * @example '0x41ce73496136A0072013B9187550e30841eDeD74'
     */
    from: string;

    /**
     * Wallet address of payment recipient
     *
     * @example '0x1105F97fBAB9674Ef069331F2b48E9B870ed9Adc'
     */
    to: string;

    /**
     * Received amount in cryptocurrency
     *
     * @example '501.723934'
     */
    amount: string | null;

    /**
     * Exchange rate to fiat currency
     *
     * @example '204.028345'
     */
    rate: string;

    /**
     * Transaction hash
     *
     * @example '0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e'
     */
    hash: string | null;

    /**
     * Block number
     *
     * @example 1000000
     */
    block: number | null;

    /**
     * Transaction status
     *
     * @example 'success'
     */
    status: TransactionStatus;

    /**
     * Transaction creation timestamp
     *
     * @example '2024-07-31T00:48:53Z'
     */
    createdAt: string;

    /**
     * Transaction update timestamp
     *
     * @example '2024-07-31T00:49:28Z'
     */
    updatedAt: string;

    /**
     * Transaction expiration timestamp
     *
     * @example '2024-07-31T01:14:28Z'
     */
    expireAt: string;

    /**
     * Transaction cryptocurrency
     */
    cryptocurrency: Cryptocurrency;

    /**
     * Transaction network
     */
    network: Network;
}
