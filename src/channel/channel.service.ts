import { Injectable } from '@nestjs/common';
import { Channel } from './entity/channel';

@Injectable()
export class ChannelService {
  private channels: Channel[] = [];
  getHello(): string {
    return 'Hello World!';
  }
  createChannel(channel: Channel) {
    this.channels.push(channel);
    return channel;
  }

  getChannels() {
    return this.channels;
  }
}
