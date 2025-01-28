import { AppEnvironment } from '../models';

export type AppCreateRequest = {
    /**
     * App name
     *
     * @format ASCII
     * @maxLength 255
     */
    name: string;

    /**
     * App description
     *
     * @format ASCII
     * @maxLength 1000
     */
    description?: string;

    /**
     * App image (uploaded file name)
     *
     * @maxLength 50
     */
    image?: string | null;

    /**
     * App slug
     *
     * @maxLength 255
     */
    slug?: string | null;

    /**
     * App URL
     *
     * @format URL
     * @maxLength 1000
     */
    url: string;

    environment: AppEnvironment;
};

export type AppUpdateRequest = Partial<AppCreateRequest> & {
    /**
     * If set to `true` - regenerate token
     */
    token?: true;
};
