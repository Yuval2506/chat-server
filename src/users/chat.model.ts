import { Message } from "./message.model"

export class Chat{
    constructor (
        private isGroup: boolean,
        private name: string,
        private image:string, 
        private lastMessage:Message,
        private messages: Message[]
    ) {}
}