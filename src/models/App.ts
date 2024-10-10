export default interface App {
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
     */
    url: string;
}
