import { Chat } from "../chats/chat.model"

export class User {
    constructor (
        private phone: string,
        private password:string,
        private image:string, 
        private chats: Chat[]
    ) {}
}