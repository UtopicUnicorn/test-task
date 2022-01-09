import { Component, OnInit} from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor( private fb: FormBuilder,
               private authService: AuthService)
  {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() : void {

    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', Validators.required),
    })
  }

  onSubmit():void{
    console.log('OK');
    this.authService.login(this.loginForm.value).subscribe
    ({next:result=>{console.log(result);console.log(this.authService.getToken())},
      error: error => {console.warn(error)}});

  }

}
