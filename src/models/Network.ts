export default interface Network {
    /**
     * Network ID
     *
     * @example '7639e9e4-6306-46a9-9acc-cc943d0d0c60'
     */
    id: string;

    /**
     * Network symbol
     *
     * @example 'ethereum'
     */
    symbol: string;

    /**
     * Network name
     *
     * @example 'Ethereum'
     */
    name: string;

    /**
     * Network type
     *
     * @example 'EVM'
     */
    type: string;
}
