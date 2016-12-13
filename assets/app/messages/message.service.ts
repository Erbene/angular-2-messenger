/**
 * Created by Maia on 12/11/2016.
 */
import {Message} from './message.model';

export class MessageService {
    private messages: Message[] = [];
    addMessage(message:Message){
        this.messages.push(message);
        console.log(this.messages);
    }
    getMessages(){
        return this.messages;
    }
    deleteMessage(message:Message){
        this.messages.splice(this.messages.indexOf(message));
    }
}
