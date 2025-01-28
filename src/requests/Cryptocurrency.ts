export type CryptocurrencyListRequest = {
    /**
     * Return cryptocurrencies for specific App ID
     *
     * @example 'db50e5fc-1b91-49c4-8b6a-d33a44ffdda5'
     */
    appId?: string;

    /**
     * Include cryptocurrency rates in response
     *
     * @default false
     */
    rates?: boolean;

    /**
     * Include networks list in response
     *
     * @default false
     */
    networks?: boolean;
};
