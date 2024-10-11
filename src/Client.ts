import { CryptocurrencyService, CurrencyService, InvoiceService, ProductService } from './services';

type Fetch = typeof fetch;

export interface ClientOptions {
    /**
     * API base
     *
     * @default 'https://api.simplepay.ai'
     */
    apiBase?: string;

    /**
     * API key for server-side calls
     *
     * Warning!
     * Do not expose your API key when using Client in frontend application,
     * this parameter should only be set when using Client on server-side
     */
    apiKey?: string;

    /**
     * Fetch implementation
     */
    fetch?: Fetch;
}

export class Client {
    /**
     * Fiat currency API
     */
    public currency: CurrencyService;

    /**
     * Cryptocurrency API
     */
    public cryptocurrency: CryptocurrencyService;

    /**
     * Invoice API
     */
    public invoice: InvoiceService;

    /**
     * Product API
     */
    public product: ProductService;

    constructor(options: ClientOptions = {}) {
        const apiBase = options.apiBase || 'https://api.simplepay.ai';
        const fetchClient = options.fetch || fetch;

        this.currency = new CurrencyService(fetchClient, `${apiBase}/currency`);
        this.cryptocurrency = new CryptocurrencyService(fetchClient, `${apiBase}/cryptocurrency`);
        this.invoice = new InvoiceService(fetchClient, `${apiBase}/invoice`, options.apiKey);
        this.product = new ProductService(fetchClient, `${apiBase}/product`);
    }
}
