/**
 * Created by Maia on 12/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    signinForm:FormGroup;
    OnSubmit(){
        console.log(this.signinForm);
    }
    ngOnInit(){
        this.signinForm = new FormGroup({
            email: new FormControl(null,Validators.required),
            password: new FormControl(null,Validators.required),
        });
    }
}