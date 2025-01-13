import {
    AppService,
    CryptocurrencyService,
    CurrencyService,
    InvoiceService,
    ProductService,
    TransactionService
} from './services';

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

export interface ClientState {
    csrfToken: string | null;
}

export class Client {
    /**
     * App API
     */
    public app: AppService;

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

    /**
     * Transaction API
     */
    public transaction: TransactionService;

    private state: ClientState;

    constructor(options: ClientOptions = {}) {
        const apiBase = options.apiBase || 'https://api.simplepay.ai';
        const fetchApi = options.fetch || fetch;

        this.state = {
            csrfToken: null
        };

        this.app = new AppService(this.state, fetchApi, `${apiBase}/app`);
        this.currency = new CurrencyService(this.state, fetchApi, `${apiBase}/currency`);
        this.cryptocurrency = new CryptocurrencyService(
            this.state,
            fetchApi,
            `${apiBase}/cryptocurrency`
        );
        this.invoice = new InvoiceService(
            this.state,
            fetchApi,
            `${apiBase}/invoice`,
            options.apiKey
        );
        this.product = new ProductService(this.state, fetchApi, `${apiBase}/product`);
        this.transaction = new TransactionService(this.state, fetchApi, `${apiBase}/transaction`);
    }
}
