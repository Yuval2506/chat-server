import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Chat } from "./chat.model"

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  addUser(
    @Body('phone') phone: string, 
    @Body('password') password: string, 
    @Body('image') image: string, 
    @Body('chats') chats: Chat[]
  ): string {
    return this.UsersService.insertUser(phone, password, image, chats);
  }


  @Get()
  getHello(): string {
    return this.UsersService.getHello();
  }
}
