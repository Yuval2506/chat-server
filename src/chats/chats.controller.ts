import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { Chat } from "../chats/chat.model"
import { User } from "../users/user.model"
import { Message } from "../messages/message.model"

@Controller('chats')
export class ChatsController {
  constructor(private readonly ChatsService: ChatsService) {}

  @Post()
  addChat( 
    @Body('isGroup') isGroup: boolean, 
    @Body('name') name: string, 
    @Body('lastMessage') lastMessage: Message, 
    @Body('image') image: string,
    @Body('messages') messages: Message[]
  ): string {
    console.log(isGroup, name, lastMessage, image, messages);
    return this.ChatsService.insertChat(isGroup, name, lastMessage, image, messages);
  }


  @Get()
  getAllChats(): any{
    console.log(this.ChatsService.getChats());
    return this.ChatsService.getChats();
  }

  @Get(':name')
  getChat(@Param('name') chatName: string){
    console.log(this.ChatsService.getSingleChat(chatName));
    return this.ChatsService.getSingleChat(chatName);
  }
  
}
