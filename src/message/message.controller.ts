import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './entity/message';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  private messages: Message[] = [];
  private nextID = 0;
  increment() {
    this.nextID++;
    return this.nextID;
  }
  @Post()
  writeMessage(
    @Body('title') title: string,
    @Body('content') content: string,
    @Body('channel') channel: string,
  ) {
    const message = {
      id: this.increment(),
      title,
      content,
      channel,
      createdAt: new Date(),
    };
    this.messages.push(message);
    return message;
  }

  @Get(':channel')
  getMessages(@Param('channel') channel: string) {
    return this.messages
      .filter((message) => message.channel === channel)
      .sort((a, b) => (a > b ? 1 : -1));
  }
}
