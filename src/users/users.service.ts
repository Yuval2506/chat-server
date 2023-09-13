import { Injectable } from '@nestjs/common';

import { User } from './user.model'
import { Chat } from "./chat.model"

@Injectable()
export class UsersService {

    users: User[] = [];

    insertUser(phone: string, password: string, image: string, chats: Chat[]) : string {
        const newUser = new User(phone, password, image, chats);
        this.users.push(newUser);
        return "User added successfully";
    }

    getHello(): string {
        return 'Hello World!';
    }
}