import Pusher from 'pusher-js';
import { InvoiceChannel } from './channels';

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

    constructor(options: WsClientOptions) {
        const wsHost = options.wsHost || 'ws.simplepay.ai';

        this.pusher = new Pusher('simplepay', {
            wsHost,
            forceTLS: true,
            enableStats: false,
            enabledTransports: ['ws', 'wss'],
            cluster: 'eu'
        });
    }

    public invoice(id: string) {
        return new InvoiceChannel(this.pusher.subscribe(`invoice.${id}`));
    }
}
