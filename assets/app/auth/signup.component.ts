/**
 * Created by Maia on 12/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    signupForm:FormGroup;
    OnSubmit(){
        console.log(this.signupForm);
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