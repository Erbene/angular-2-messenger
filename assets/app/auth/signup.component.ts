/**
 * Created by Maia on 12/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { User } from './user.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    signupForm:FormGroup;
    constructor(private authenticationService:AuthenticationService){}
    OnSubmit(){
        const user = new User(
            this.signupForm.value.email,
            this.signupForm.value.password,
            this.signupForm.value.firstName,
            this.signupForm.value.lastName
        );
        this.authenticationService.signup(user)
        .subscribe(
            (data)=>console.log(data),
            (error)=> console.log(error)
        );
        this.signupForm.reset();
    }
    ngOnInit(){
        this.signupForm = new FormGroup({
            firstName: new FormControl(null,Validators.required),
            lastName: new FormControl(null,Validators.required),
            email: new FormControl(null,Validators.required),
            password: new FormControl(null,Validators.required),
        });
    }
}