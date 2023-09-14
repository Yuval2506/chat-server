import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Chat } from "./chat.model"
import { User } from "./user.model"

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
    console.log(phone, password, image, chats);
    return this.UsersService.insertUser(phone, password, image, chats);
  }


  @Get()
  getAllUsers(): any{
    console.log(this.UsersService.getUsers());
    return this.UsersService.getUsers();
  }
}
