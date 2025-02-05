export enum AppEnvironment {
    Development = 'development',
    Production = 'production'
}

export interface PublicApp {
    /**
     * App ID
     *
     * @example '9aca19fe-f314-4328-88e6-09b337aad2dd'
     */
    id: string;

    /**
     * App name
     *
     * @example 'Simple Pizza'
     */
    name: string;

    /**
     * App description
     *
     * @example 'The best place to try authentic Italian pizza'
     */
    description: string | null;

    /**
     * App image
     *
     * @format URL
     * @example 'https://example.com/image.webp'
     */
    image: string | null;

    /**
     * App slug
     */
    slug: string | null;

    /**
     * App URL
     *
     * @format URL
     * @example 'https://example.com'
     */
    url: string;
}

export default interface App extends PublicApp {
    /**
     * App Token
     */
    token: string;

    /**
     * App Environment
     */
    environment: AppEnvironment;

    /**
     * App creation timestamp
     *
     * @example '2024-07-31T00:48:53Z'
     */
    createdAt: string;

    /**
     * App update timestamp
     *
     * @example '2024-07-31T00:49:28Z'
     */
    updatedAt: string | null;
}
