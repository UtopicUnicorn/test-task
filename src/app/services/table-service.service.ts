import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {userEntity} from "../users-table/userEntity";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../baseurl";
import {map} from 'rxjs/operators';
import {SourcesEntity} from "../users-table/sourcesEntity";

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  constructor(private http: HttpClient) { }

  //users get request
  getUsers(): Observable<userEntity[]>{
    return this.http.get<userEntity[]>(baseURL +'?page=2').pipe(map((data:any)=>{
      let userList = data['data'];
      return userList.map(function (user:any):userEntity{
        return new userEntity(user.id, user.email, user.first_name, user.last_name, user.avatar);
      });
    }));
  }

  //sources get request
  getSourcese(): Observable<SourcesEntity[]>{
    return this.http.get<SourcesEntity[]>(baseURL +'unknown').pipe(map((data:any)=>{
      let sourceList = data['data'];
      return sourceList.map(function (source:any):SourcesEntity{
        return new SourcesEntity(source.id, source.name, source.year, source.color, source.pantone_value);
      });
    }));
  }

  //user delete request
  deleteUser(user: userEntity) : Observable<any>{
    return this.http.delete(baseURL + `/${user.id}`);
  }

}
