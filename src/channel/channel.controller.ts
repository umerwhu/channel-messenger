import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Increment } from './entity/increment';

const increment = new Increment();
@Controller('channels')
export class Channelontroller {
  constructor(private readonly channelService: ChannelService) {}

  @Post()
  createChannel(@Body('name') name: string) {
    const channel = {
      id: increment.incrementId(),
      name,
    };
    return this.channelService.createChannel(channel);
  }

  @Get()
  getChannels() {
    return this.channelService.getChannels();
  }
}
