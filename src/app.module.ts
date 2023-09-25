import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.mudule'
import { ChatsModule } from './chats/chats.module'
import { MessagesModule } from './messages/messages.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
     UsersModule,
     ChatsModule, 
     MessagesModule, 
     MongooseModule.forRoot('mongodb+srv://0502056804:Yuval2506@chat-cluster.x6guxnn.mongodb.net/chat-cluster')
    ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
