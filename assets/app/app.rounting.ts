/**
 * Created by Maia on 12/11/2016.
 */
import { Routes, RouterModule} from '@angular/router';

import {MessagesComponent} from './messages/messages.component';
import {AuthenticationComponent} from './auth/authentication.component';

const APP_ROUTES:Routes = [
    { path: '',redirectTo:'/messages', pathMatch: 'full'},
    { path: 'messages',component: MessagesComponent },
    { path: 'auth', component: AuthenticationComponent, loadChildren: './auth/authentication.module#AuthenticationModule' },
];
export const routing = RouterModule.forRoot(APP_ROUTES);
