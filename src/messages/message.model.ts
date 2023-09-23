export class Message{
    constructor (
        private content: string, 
        private personSent: string,
        private timeSent: Date
    ) {}

    getContent () :string {
        return this.content;
    }
}