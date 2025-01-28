import type { ClientState } from './';
import camelcaseKeys from 'camelcase-keys';
import decamelizeKeys from 'decamelize-keys';

type Fetch = typeof fetch;

export default abstract class BaseService {
    private readonly CSRF_TOKEN_HEADER: string = 'X-Csrf-Token';

    constructor(
        protected state: ClientState,
        protected fetch: Fetch,
        protected apiBase: string,
        protected apiKey: string | null = null
    ) {}

    protected async request(
        method: string,
        path: string | null = null,
        body: object | null = null
    ): Promise<Response> {
        const headers: HeadersInit = {};

        if (this.state.csrfToken != null) {
            headers[this.CSRF_TOKEN_HEADER] = this.state.csrfToken;
        }

        let bodyInit: BodyInit | null = null;

        if (body !== null) {
            bodyInit = JSON.stringify(body);
            headers['Content-Type'] = 'application/json';
        }

        if (this.apiKey !== null) {
            headers['Authorization'] = `Bearer ${this.apiKey}`;
        }

        let fetch = this.fetch;

        if (typeof window !== 'undefined') {
            fetch = this.fetch.bind(window);
        }

        const response = await fetch(`${this.apiBase}${path || ''}`, {
            credentials: 'include',
            method,
            headers,
            body: bodyInit
        });

        if (response.headers.has(this.CSRF_TOKEN_HEADER)) {
            this.state.csrfToken = response.headers.get(this.CSRF_TOKEN_HEADER);
        }

        return response;
    }

    protected toSnakeCase(obj: any): object {
        return decamelizeKeys(obj, {
            deep: true
        });
    }

    protected toCamelCase(obj: any): object {
        return camelcaseKeys(obj, {
            deep: true
        });
    }
}
