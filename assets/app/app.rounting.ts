/**
 * Created by Maia on 12/11/2016.
 */
import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from './auth/authentication.component';
import { AUTHENTICATION_ROUTES } from './auth/authentication.routes';
import { Routes, RouterModule} from '@angular/router';

const APP_ROUTES:Routes = [
    { path: '',redirectTo:'/messages', pathMatch: 'full'},
    { path: 'messages',component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, children: AUTHENTICATION_ROUTES},
];
export const routing = RouterModule.forRoot(APP_ROUTES);
