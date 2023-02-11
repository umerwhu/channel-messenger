import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChannelModule } from './channel/channel.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [MessageModule, ChannelModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
