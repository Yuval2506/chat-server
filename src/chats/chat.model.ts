import { Message } from "../messages/message.model"

export class Chat{
    constructor (
        private isGroup: boolean,
        private name: string,
        private lastMessage:Message,
        private image:string, 
        private messages: Message[]
    ) {}
}