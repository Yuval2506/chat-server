import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';

import { User } from './user.model'
import { Chat } from "../chats/chat.model"
import { Model } from "mongoose";

@Injectable()
export class UsersService {

    constructor(
        @InjectModel('User') private readonly UserModel: Model<User>, 
    ) {}

    async insertUser(phone: string, password: string, image: string, chats: Chat[]) {
        const newUser = new this.UserModel({
            phone,
            password: password,
            image: image,
            chats: chats
        });
        const result = await newUser.save();
        return "User "+result.id+" added successfully";
    }

    async getUsers() {
        const users = await this.UserModel.find().exec();
        return users as User[];
    }

    /*getSingleUser(phone:string) : User {
        //const foundUser = this.users.find((searchedUser) => searchedUser.getPhone() == phone);
        const foundUser = this.users.find((searchedUser) => searchedUser.phone == phone);
        console.log(foundUser);
        if (!foundUser)
        {
            throw new NotFoundException("Could not find message");
        }
        return foundUser; 
    }*/
}