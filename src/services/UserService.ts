import { ClientState, UserInvoiceService } from '../';
import BaseService from '../BaseService';
import { UserBillingService, UserPATService } from './';

type Fetch = typeof fetch;

export default class UserService extends BaseService {
    public billing: UserBillingService;
    public invoice: UserInvoiceService;
    public pat: UserPATService;

    constructor(
        protected state: ClientState,
        protected fetch: Fetch,
        protected apiBase: string
    ) {
        super(state, fetch, apiBase);

        this.billing = new UserBillingService(state, fetch, `${this.apiBase}/billing`);
        this.invoice = new UserInvoiceService(state, fetch, `${this.apiBase}/invoice`);
        this.pat = new UserPATService(state, fetch, `${this.apiBase}/pat`);
    }
}
