import { Currency } from './';

interface ProductPrice {
    /**
     * Currency
     */
    currency: Currency;

    /**
     * Price
     *
     * @example 9.99
     */
    price: number;
}

export default interface Product {
    /**
     * Product ID
     *
     * @example '769f2cf4-0fa2-4f06-a22a-06525ec489a8'
     */
    id: string;

    /**
     * Product name
     *
     * @example 'Pepperoni Pizza'
     */
    name: string;

    /**
     * Product description
     *
     * @example 'Classic pepperoni pizza with homemade sauce and cheese'
     */
    description: string | null;

    /**
     * Product image
     *
     * @format URL
     */
    image: string | null;

    /**
     * Product creation timestamp
     *
     * @example '2024-07-31T00:48:53Z'
     */
    createdAt: string;

    /**
     * Product update timestamp
     *
     * @example '2024-07-31T00:49:28Z'
     */
    updatedAt: string | null;

    /**
     * Product prices
     */
    prices: ProductPrice[];
}
