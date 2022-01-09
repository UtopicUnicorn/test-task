import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {
  registrationForm!: FormGroup;
  aSub!: Subscription;

  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router)
  { this.createForm() }

  ngOnInit(): void {
  }

  createForm() {

    this.registrationForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', Validators.required),
    })
  }
  onSubmit():void{
    console.log('OK');
    this.aSub =this.authService.register(this.registrationForm.value).subscribe
    ({next:()=>this.router.navigate(['/login']),
      error: error => {console.warn(error)}});
  }
}
