import { UserAddressType } from '../models';

export type UserAddressCreateRequest = {
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
};

export type UserAddressUpdateRequest = {
    /**
     * Address name
     *
     * @example 'Main Ethereum wallet'
     */
    name?: string;
};
