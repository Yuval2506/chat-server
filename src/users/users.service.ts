import { Injectable } from '@nestjs/common';

import { User } from './user.model'
import { Chat } from "../chats/chat.model"

@Injectable()
export class UsersService {
    private users: User[] = [];

    insertUser(phone: string, password: string, image: string, chats: Chat[]) : string {
        const newUser = new User(phone, password, image, chats);
        this.users.push(newUser);
        console.log(this.users);
        return "User added successfully";
    }

    getUsers(): User[] {
        //return [...this.users];
        const tempUsers = [];
        this.users.map((element)=> {
            tempUsers.push(element);
        });
        return tempUsers;
    }
}