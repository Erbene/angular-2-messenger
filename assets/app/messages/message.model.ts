export class  Message {
    username: string;
    content: string;
    userId: string;
    _id: string;

    constructor(content:string,username:string,userId?:string,messageId?:string){
        this.content = content;
        this.username = username;
        this.userId = userId;
        this._id = messageId;
    }
}