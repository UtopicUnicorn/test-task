import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {baseURL} from "../baseurl";
import {Observable} from "rxjs";
import {userEntity} from "../users-table/userEntity";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserEditorService {

  constructor(private http: HttpClient) { }

  getUser(id: string):Observable<userEntity>{
    return this.http.get<userEntity>(baseURL + `/${id}`)
      .pipe(map((data:any)=>{
        return data['data']})
      )
  };

  updateForm(id:string,sendForm:userEntity): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<userEntity>(baseURL + `/${id}`, sendForm, httpOptions);

  }

}
