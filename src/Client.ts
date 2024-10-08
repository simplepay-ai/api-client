import { CryptocurrencyService, CurrencyService, InvoiceService, ProductService } from './services';

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

        this.currency = new CurrencyService(`${apiBase}/currency`);
        this.cryptocurrency = new CryptocurrencyService(`${apiBase}/cryptocurrency`);
        this.invoice = new InvoiceService(`${apiBase}/invoice`, options.apiKey);
        this.product = new ProductService(`${apiBase}/product`);
    }
}
