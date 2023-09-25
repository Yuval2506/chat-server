import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { Chat } from "../chats/chat.model"
import { User } from "./user.model"

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  async addUser(
    @Body('phone') phone: string, 
    @Body('password') password: string, 
    @Body('image') image: string, 
    @Body('chats') chats: Chat[]
  ) {
    console.log(phone, password, image, chats);
    const generatedId = await this.UsersService.insertUser(
      phone,
      password,
      image,
      chats);
    return generatedId as string;
  }

  @Get()
  async getAllUsers() {
    const users = await this.UsersService.getUsers();
    return users;
  }

  /*@Get(':phone')
  getUser(@Param('phone') userPhone: string){
    console.log(this.UsersService.getSingleUser(userPhone));
    return this.UsersService.getSingleUser(userPhone);
  }*/

}
