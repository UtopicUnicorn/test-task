import { Component, OnInit} from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errMess!: string;
  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router) {}

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
    (
      {next:()=>this.router.navigate(['table']),
                error:error => {console.warn(error);this.errMess = error.error.error.toString()}
              });
  }

  onRegistration(): void{
    this.router.navigate(['registration']).then();
  }

}
