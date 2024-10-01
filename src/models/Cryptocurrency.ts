import type { Network } from './';

export interface CryptocurrencyRates {
    [key: string]: number;
}

export default interface Cryptocurrency {
    /**
     * Cryptocurrency ID
     *
     * @example '4967cf90-ce74-4edf-9b4e-f6392de1c95a'
     */
    id: string;

    /**
     * Cryptocurrency symbol
     *
     * @example 'USDT'
     */
    symbol: string;

    /**
     * Cryptocurrency name
     *
     * @example 'Tether'
     */
    name: string;

    /**
     * Number of decimal places
     *
     * @example 18
     */
    decimals: number;

    /**
     * Is stablecoin
     *
     * @example true
     */
    stable: boolean;

    /**
     * List of blockchains in which cryptocurrency may be accepted
     */
    networks?: Network[];

    /**
     * Conversion rates to fiat currencies
     *
     * Key is ISO 4217 alphabetic code of fiat currency
     *
     * Value is price for 1 coin
     *
     * @example {
     *   USD: 1,
     *   EUR: 0.98
     * }
     * @see https://en.wikipedia.org/wiki/ISO_4217
     */
    rates?: CryptocurrencyRates;
}
