import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from '../users/user.model'
import { Chat } from "../chats/chat.model"
import { Message } from "../messages/message.model"

@Injectable()
export class ChatsService {
    private chats: Chat[] = [];

    insertChat(isGroup: boolean, name: string, lastMessage:Message,image: string, messages: Message[]) : string {
        const newChat = new Chat(isGroup, name, lastMessage, image, messages);
        this.chats.push(newChat);
        console.log(this.chats);
        return "Chat added successfully";
    }

    getChats(): Chat[] {
        //return [...this.users];
        const tempChats = [];
        this.chats.map((element)=> {
            tempChats.push(element);
        });
        return tempChats;
        return this.chats;
    }

    getSingleChat(name:string) : Chat {
        const foundChat = this.chats.find((searchedChat) => searchedChat.getName() == name);
        if (!foundChat)
        {
            throw new NotFoundException("Could not find chat");
        }
        return foundChat; 
    }
}