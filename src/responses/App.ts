export type AppCreateErrors = {
    name?: 'required' | 'ascii' | 'max';
    description?: 'ascii' | 'max';
    image?: 'ascii' | 'max' | 'invalid';
    slug?: 'alpha' | 'lowercase' | 'max' | 'taken';
    url?: 'required' | 'http_url' | 'max';
    environment?: 'required' | 'oneof';
};

type WithoutRequired<T> = {
    [K in keyof T]: Exclude<T[K], 'required'>;
};

export type AppUpdateErrors = WithoutRequired<AppCreateErrors> & {
    token?: 'boolean';
};
