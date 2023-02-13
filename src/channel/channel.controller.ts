import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Channel } from './entity/channel';

@Controller('channels')
export class Channelontroller {
  constructor(private readonly channelService: ChannelService) {}

  private nextID = 0;
  increment() {
    this.nextID++;
    return this.nextID;
  }
  @Post()
  createChannel(@Body('name') name: string) {
    const channel = {
      id: this.increment(),
      name,
    };
    return this.channelService.createChannel(channel);
  }

  @Get()
  getChannels() {
    return this.channelService.getChannels();
  }
}
