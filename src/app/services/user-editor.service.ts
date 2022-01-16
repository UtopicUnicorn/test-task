import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {apiUrl} from "../api-url";
import {Observable} from "rxjs";
import {userInfoClass} from "../users-table/user-info.class";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserEditorService {

  constructor(private http: HttpClient) {
  }

  getUser(id: string): Observable<userInfoClass> {
    return this.http.get<userInfoClass>(apiUrl + `/${id}`)
      .pipe(map((data: any) => {
          return data['data'];
        })
      );
  }

  updateForm(id: string, sendForm: userInfoClass): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<userInfoClass>(apiUrl + `/${id}`, sendForm, httpOptions);

  }

}
