import { Injectable } from '@nestjs/common';
import { Message } from './entity/message';

@Injectable()
export class MessageService {
  private messages: Message[] = [];
  getHello(): string {
    return 'Hello World!';
  }

  writeMessage(message: Message) {
    this.messages.push(message);
    return message;
  }

  getMessages(channel: string) {
    return this.messages
      .filter((message) => message.channel === channel)
      .sort((a, b) => (a > b ? 1 : -1));
  }
}
