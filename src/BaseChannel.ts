import { Channel } from 'pusher-js';

export default class BaseChannel {
    constructor(protected channel: Channel) {}
}
