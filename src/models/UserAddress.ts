export enum UserAddressType {
    /**
     * Bitcoin
     */
    BTC = 'BTC',

    /**
     * Ethereum-like (Ethereum, Binance Smart Chain, Polygon, etc.)
     */
    EVM = 'EVM',

    /**
     * Litecoin
     */
    LTC = 'LTC',

    /**
     * Tron
     */
    TRX = 'TRX'
}

export default interface UserAddress {
    /**
     * Address ID
     *
     * @example '0660bfde-e576-467a-af63-69edaf85f8c2'
     */
    id: string;

    /**
     * Address name
     *
     * @example 'Main Ethereum wallet'
     */
    name: string;

    /**
     * Address
     *
     * @example '0x41ce73496136A0072013B9187550e30841eDeD74'
     */
    address: string;

    /**
     * Network type
     *
     * @example 'EVM'
     */
    type: UserAddressType;

    /**
     * Address creation timestamp
     *
     * @example '2024-07-31T00:48:53Z'
     */
    createdAt: string;

    /**
     * Address update timestamp
     *
     * @example '2024-07-31T00:49:28Z'
     */
    updatedAt: string;
}
