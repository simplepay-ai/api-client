import { ClientState, UserInvoiceService } from '../';
import BaseService from '../BaseService';
import { UserAddressService, UserBillingService, UserPATService, UserProfileService } from './';

type Fetch = typeof fetch;

export default class UserService extends BaseService {
    public address: UserAddressService;
    public billing: UserBillingService;
    public invoice: UserInvoiceService;
    public pat: UserPATService;
    public profile: UserProfileService;

    constructor(
        protected state: ClientState,
        protected fetch: Fetch,
        protected apiBase: string
    ) {
        super(state, fetch, apiBase);

        this.address = new UserAddressService(state, fetch, `${this.apiBase}/address`);
        this.billing = new UserBillingService(state, fetch, `${this.apiBase}/billing`);
        this.invoice = new UserInvoiceService(state, fetch, `${this.apiBase}/invoice`);
        this.pat = new UserPATService(state, fetch, `${this.apiBase}/pat`);
        this.profile = new UserProfileService(state, fetch, `${this.apiBase}/profile`);
    }
}
