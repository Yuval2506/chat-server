import { Injectable, NotFoundException } from '@nestjs/common';
import { Message } from './message.model'

@Injectable()

export class MessagesService {

    private messages: Message[] = [];

    insertMessage(content: string, personSent: string, timeSent: Date) : string {
        const newMessage = new Message(content, personSent, timeSent);
        this.messages.push(newMessage);
        console.log(this.messages);
        return "Message added successfully";
    }

    getMessages(): Message[] {
        //return [...this.users];
        const tempMessages = [];
        this.messages.map((element)=> {
            tempMessages.push(element);
        });
        return tempMessages;
        return this.messages;
    }

    getSingleMessage(message:string) : Message {
        const foundMessage = this.messages.find((searchedMessage) => searchedMessage.getContent() == message);
        if (!foundMessage)
        {
            throw new NotFoundException("Could not find message");
        }
        return foundMessage; 
    }

}
