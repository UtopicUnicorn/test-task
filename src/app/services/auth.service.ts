import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {loginURL} from "../api-url";
import {registerURL} from "../api-url";
import {HttpClient} from "@angular/common/http";
import {userAuthClass} from "../login/user-auth.class";
import {tap} from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string | undefined;

  constructor(private http: HttpClient) {
  }


  login(user: userAuthClass): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(loginURL, user)
      .pipe(
        tap(
          ({token}) => {
            localStorage.setItem('token', token);
            this.setToken(token);
          }
        )
      )
  }

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string {
    return <string>this.token;
  }

  isAuth(): boolean {
    return !!this.token;
  }

  checkToken(): void {
    const potToken = localStorage.getItem('token');
    if (potToken !== null) {
      this.setToken(potToken);
    }
  }

  register(user: userAuthClass): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(registerURL, user).pipe(
      tap(
        ({token}) => {
          localStorage.setItem('token', token);
          this.setToken(token);
        }
      )
    );
  }

  logout() {
    this.setToken('');
    localStorage.clear();
  }
}
