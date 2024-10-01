import { CryptocurrencyService, CurrencyService, InvoiceService } from './services';

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
    private currencyService: CurrencyService;
    private cryptocurrencyService: CryptocurrencyService;
    private invoiceService: InvoiceService;

    constructor(options: ClientOptions = {}) {
        const apiBase = options.apiBase || 'https://api.simplepay.ai';

        this.currencyService = new CurrencyService(`${apiBase}/currency`);
        this.cryptocurrencyService = new CryptocurrencyService(`${apiBase}/cryptocurrency`);
        this.invoiceService = new InvoiceService(`${apiBase}/invoice`, options.apiKey);
    }

    /**
     * Fiat currency API
     */
    public get currency() {
        return this.currencyService;
    }

    /**
     * Cryptocurrency API
     */
    public get cryptocurrency() {
        return this.cryptocurrencyService;
    }

    /**
     * Invoice API
     */
    public get invoice() {
        return this.invoiceService;
    }
}
