export class Message{
    constructor (
        private content:string, 
        private personSent: string,
        private timeSent: Date
    ) {}
}