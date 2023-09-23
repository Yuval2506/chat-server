import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.mudule'
import { ChatsModule } from './chats/chats.module'
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [UsersModule, ChatsModule, MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
