import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {baseURL} from "../baseurl";
import {ProcessHttpmsgService} from "./process-httpmsg.service";
import {catchError, Observable} from "rxjs";
import {userEntity} from "../users-table/userEntity";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserEditorService {

  constructor(private http: HttpClient,
              private processHTTPMsgService: ProcessHttpmsgService) { }

  getUser(id: string):Observable<userEntity>{
    return this.http.get<userEntity>(baseURL + `/${id}`)
      .pipe(map((data:any)=>{
        return data['data']})
      )
  };
  //     return user.map(function (user:any):userEntity{
  //       return new userEntity(user.id, user.email, user.first_name, user.last_name, user.avatar);
  //     });
  //   }),catchError(this.processHTTPMsgService.handleError));
  // }
  // getUser(id: string):Observable<userEntity>{
  //   return this.http.get<userEntity>(baseURL + `/${id}`).pipe(catchError(this.processHTTPMsgService.handleError));
  //
  // }

  updateForm(id:string,sendForm:userEntity): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<userEntity>(baseURL + `/${id}`, sendForm, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));

  }

}
