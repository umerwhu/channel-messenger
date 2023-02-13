import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { Message } from './entity/message';

@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

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
    return this.messageService.writeMessage(message);
  }

  @Get(':channel')
  getMessages(@Param('channel') channel: string) {
    return this.messageService.getMessages(channel);
  }
}
