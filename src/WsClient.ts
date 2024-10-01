import Pusher from 'pusher-js';
import { AppClientInvoiceChannel, InvoiceChannel } from './channels';

export interface WsClientOptions {
    /**
     * WebSocket host
     *
     * @default 'ws.simplepay.ai'
     */
    wsHost?: string;
}

export class WsClient {
    private pusher: Pusher;

    constructor(options: WsClientOptions = {}) {
        const wsHost = options.wsHost || 'ws.simplepay.ai';

        this.pusher = new Pusher('simplepay', {
            wsHost,
            forceTLS: true,
            enableStats: false,
            enabledTransports: ['ws', 'wss'],
            cluster: 'eu'
        });
    }

    /**
     * Subscribe to invoices by App ID and Client ID
     */
    public appClientInvoice(appId: string, clientId: string) {
        const channel = this.pusher.subscribe(`app.${appId}.client.${clientId}.invoice`);

        return new AppClientInvoiceChannel(channel);
    }

    /**
     * Subscribe to invoice by ID
     */
    public invoice(id: string) {
        const channel = this.pusher.subscribe(`invoice.${id}`);

        return new InvoiceChannel(channel);
    }
}
