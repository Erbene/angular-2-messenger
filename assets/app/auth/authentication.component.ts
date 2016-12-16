/**
 * Created by Maia on 12/11/2016.
 */
import { Component } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
    selector: 'app-authentication',
    template: `
        <header class="row spacing">
            <div class="col-md-8 col-md-offset-2">
                <ul class="nav nav-tabs">
                <li routerLinkActive="active"><a [routerLink]="['signin']">Sign in</a></li>
                <li routerLinkActive="active" *ngIf="!isLoggedIn()"><a [routerLink]="['signup']">Sign up</a></li>
                <li routerLinkActive="active" *ngIf="isLoggedIn()"><a [routerLink]="['logout']">Log out</a></li>
                </ul>
            </div>
        </header>
        <div class="row spacing">
            <router-outlet></router-outlet>
        </div>
    `
})
export class AuthenticationComponent {
    constructor(private authenticationService: AuthenticationService){}

    isLoggedIn(){
        this.authenticationService.isLoggedIn();
    }
}
