export type CryptocurrencyListRequest = {
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
