import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Increment } from '../channel/entity/increment';
import { MessageService } from './message.service';

const increment = new Increment();
@Controller('messages')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  writeMessage(
    @Body('title') title: string,
    @Body('content') content: string,
    @Body('channel') channel: string,
  ) {
    const message = {
      id: increment.incrementId(),
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
