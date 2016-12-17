/**
 * Created by Maia on 12/11/2016.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { User } from './user.model';
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    signinForm:FormGroup;
    constructor(private authenticationService:AuthenticationService, private router:Router){}
    OnSubmit(){
        const user = new User(this.signinForm.value.email,this.signinForm.value.password);
        this.authenticationService.signin(user)
        .subscribe(
            (data)=>{
                localStorage.setItem('token',data.token);
                localStorage.setItem('userId',data.userId);
                this.router.navigateByUrl('/')
            },
            (error) => console.log(error)
        )
    }
    ngOnInit(){
        this.signinForm = new FormGroup({
            email: new FormControl(null,Validators.required),
            password: new FormControl(null,Validators.required),
        });
    }
}