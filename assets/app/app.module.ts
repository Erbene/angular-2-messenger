import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { MessageModule } from './messages/messages.module';

import { MessageComponent } from "./messages/message.component";
import { MessagesComponent } from "./messages/messages.component";
import { AppComponent } from "./app.component";
import { MessageInputComponent } from './messages/message-input.component';
import { MessageListComponent } from './messages/message-list.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header.component';
import { ErrorComponent } from './error/error.component';

import { AuthenticationService } from './auth/authentication.service';
import { ErrorService } from './error/error.service';

import { routing } from './app.rounting';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    providers: [AuthenticationService,ErrorService],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule,
        MessageModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}