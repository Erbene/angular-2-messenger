import { Component } from '@angular/core';
import { Message } from './messages/message.model';

import { MessageService } from './messages/message.service';
import { ErrorService } from './error/error.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]

})
export class AppComponent {

}