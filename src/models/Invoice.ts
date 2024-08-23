import { Cryptocurrency, Currency, Network } from './';

export default interface Invoice {
    /**
     * Invoice ID
     *
     * @example '6ef3cc15-24ae-4192-9744-a9017ed153cc'
     */
    id: string;

    /**
     * Parent invoice ID
     *
     * @example 'dd90187e-d1d0-405f-bf2f-242c15403297'
     */
    parentId: string | null;

    /**
     * ID of end customer, who makes the payment
     *
     * @example '46778124-f9e0-4eba-ae1a-ecd5c0d9e90b'
     */
    clientId: string;

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
     * Invoice amount in cryptocurrency
     *
     * @example '501.723934'
     */
    amount: string;

    /**
     * Invoice price in fiat currency
     *
     * @example '500.00'
     */
    price: string;

    /**
     * Invoice type
     *
     * @example 'payment'
     */
    type: 'payment';

    /**
     * Invoice status
     *
     * @example 'success'
     */
    status: 'created' | 'processing' | 'confirming' | 'success' | 'rejected' | 'cancelled';

    /**
     * Transaction hash
     *
     * @example '0xe9e91f1ee4b56c0df2e9f06c2b8c27c6076195a88a7b8537ba8313d80e6f124e'
     */
    txHash: string | null;

    /**
     * Block number
     *
     * @example 1000000
     */
    txBlock: number | null;

    /**
     * Invoice creation timestamp
     *
     * @example '2024-07-31T00:48:53Z'
     */
    createdAt: string;

    /**
     * Invoice update timestamp
     *
     * @example '2024-07-31T00:49:28Z'
     */
    updatedAt: string;

    /**
     * Invoice expiration timestamp
     *
     * @example '2024-07-31T01:14:28Z'
     */
    expireAt: string;

    /**
     * Invoice cryptocurrency
     */
    cryptocurrency: Cryptocurrency;

    /**
     * Invoice network
     */
    network: Network;

    /**
     * Invoice fiat currency
     */
    currency: Currency;
}
