import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private readonly MessagesService: MessagesService) {}
  
  @Post()
  addMessage(
    @Body('content') content: string, 
    @Body('personSent') personSent: string, 
    @Body('timeSent') timeSent: Date
  ): string {
    console.log(content, personSent, timeSent);
    return this.MessagesService.insertMessage(content, personSent, timeSent);
  }


  @Get()
  getAllMessages(): any{
    console.log(this.MessagesService.getMessages());
    return this.MessagesService.getMessages();
  }

  @Get(':content')
  getMessage(@Param('content') messageContent: string){
    console.log(this.MessagesService.getSingleMessage(messageContent));
    return this.MessagesService.getSingleMessage(messageContent);
  }

}
