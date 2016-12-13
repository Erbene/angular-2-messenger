/**
 * Created by Maia on 12/11/2016.
 */
import {Routes} from '@angular/router';

import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.component';
import { LogoutComponent } from './logout.component';
export const AUTHENTICATION_ROUTES : Routes = [
    {path:'', redirectTo: 'signin', pathMatch:'full'},
    {path:'signin', component: SigninComponent},
    {path:'signup', component: SignupComponent},
    {path:'logout', component: LogoutComponent}
];