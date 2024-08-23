export default interface Currency {
    /**
     * Currency ID
     *
     * @example '5e091838-d7bb-4365-a395-84d82d1ac7c2'
     */
    id: string;

    /**
     * Currency symbol (ISO 4217 alphabetic code)
     *
     * @example 'USD'
     * @see https://en.wikipedia.org/wiki/ISO_4217
     */
    symbol: string;

    /**
     * Currency code (ISO 4217 numeric code)
     *
     * @example 840
     * @see https://en.wikipedia.org/wiki/ISO_4217
     */
    code: number;
}
