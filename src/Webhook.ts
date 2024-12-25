import type { WebhookEvent } from './models';
import { createHmac, timingSafeEqual } from 'crypto';
import camelcaseKeys from 'camelcase-keys';

export interface WebhookOptions {
    /**
     * Webhook secret
     */
    secret: string;

    /**
     * Webhook timestamp tolerance
     */
    tolerance?: number;
}

export interface WebhookRequest {
    headers: HeadersInit;
    body: BodyInit;
}

export class Webhook {
    private secret: Buffer;
    private tolerance: number;

    constructor(options: WebhookOptions) {
        const secret = options.secret.split('_').pop();
        if (secret === undefined) {
            throw new Error('Invalid secret');
        }
        this.secret = Buffer.from(secret, 'base64');

        this.tolerance = options.tolerance || 5 * 60;
    }

    public event(request: WebhookRequest): WebhookEvent {
        const headers = new Headers(request.headers);

        const messageId = headers.get('Webhook-ID');

        if (messageId === null) {
            throw new Error('Missing message ID');
        }

        const timestamp = headers.get('Webhook-Timestamp');

        if (timestamp === null) {
            throw new Error('Missing timestamp');
        }

        const signaturesString = headers.get('Webhook-Signature');

        if (signaturesString === null) {
            throw new Error('Missing signature');
        }

        const signatures = signaturesString.split(' ');

        this.validateTimestamp(timestamp);

        const content = request.body.toString();

        this.validateSignatures(signatures, messageId, timestamp, content);

        return camelcaseKeys(JSON.parse(content), {
            deep: true
        }) as WebhookEvent;
    }

    private validateTimestamp(timestamp: string): void {
        const now = Math.floor(Date.now() / 1000);

        const t = parseInt(timestamp, 10);

        if (isNaN(t)) {
            throw new Error('Invalid timestamp');
        }

        if (t < now - this.tolerance) {
            throw new Error('Timestamp is too old');
        }
        if (t > now + this.tolerance) {
            throw new Error('Timestamp is too new');
        }
    }

    private validateSignatures(
        signatures: string[],
        messageId: string,
        timestamp: string,
        content: string
    ): void {
        let valid = false;

        for (const signature of signatures) {
            const parts = signature.split(',', 2);
            const version = parts[0];
            const value = parts[1];

            if (version === 'v1') {
                const expectedSignature = this.createV1Signature(messageId, timestamp, content);

                const bufExpected = new TextEncoder().encode(expectedSignature);
                const bufValue = new TextEncoder().encode(value);

                if (timingSafeEqual(bufExpected, bufValue)) {
                    valid = true;

                    break;
                }
            }
        }

        if (!valid) {
            throw new Error('Invalid signature');
        }
    }

    private createV1Signature(messageId: string, timestamp: string, payload: string): string {
        const toSign = `${messageId}.${timestamp}.${payload}`;

        const signature = createHmac('sha256', this.secret).update(toSign).digest('base64');

        return signature;
    }
}
