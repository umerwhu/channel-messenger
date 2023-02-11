import { Module } from '@nestjs/common';
import { Channelontroller } from './channel.controller';
import { ChannelService } from './channel.service';

@Module({
  imports: [],
  controllers: [Channelontroller],
  providers: [ChannelService],
})
export class ChannelModule {}
