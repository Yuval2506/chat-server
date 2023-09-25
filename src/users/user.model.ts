import { Chat } from "../chats/chat.model"
import * as mongoose from "mongoose"

export const ProductSchema = new mongoose.Schema({
    phone: { type: String, required:true },
    password: { type: String, required:true },
    image: { type: String, required:false },
    chats: { type: String, required:false }
})

export interface User {
    
         phone: string;
         password:string;
         image:string; 
         chats: Chat[];

        /*getPhone(){
            return this.phone;
        }*/
}