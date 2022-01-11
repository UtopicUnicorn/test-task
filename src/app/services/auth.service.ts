import { Injectable } from '@angular/core';
import {ProcessHttpmsgService} from "./process-httpmsg.service";
import {catchError, Observable} from "rxjs";
import {loginURL} from "../baseurl";
import {registerURL} from "../baseurl";
import {HttpClient} from "@angular/common/http";
import {userAuth} from "../login/userAuth";
import {tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token!: string;

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHttpmsgService,
              ) { }


  login(user:userAuth): Observable<{ token: string }>{
    return this.http.post<{token: string}>(loginURL, user)
      .pipe(
        tap(
          ({token}) =>{
            localStorage.setItem('token',token);
            this.setToken(token);
          }
        ),
    catchError(this.processHTTPMsgService.handleError))
  }

  setToken(token:string) : void{
    this.token = token;
  }

  getToken():string{
    return this.token;
  }

  isAuth(): boolean{
    return !!this.token;
  }

  register(user:userAuth): Observable<{ token: string }>{
    return this.http.post<{token: string}>(registerURL, user).pipe(
      tap(
        ({token}) =>{
          localStorage.setItem('token',token);
          this.setToken(token);
        }
      ),
      catchError(this.processHTTPMsgService.handleError));
  }

}
