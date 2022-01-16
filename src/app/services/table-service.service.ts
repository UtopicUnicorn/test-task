import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {userInfoClass} from "../users-table/user-info.class";
import {HttpClient} from "@angular/common/http";
import {apiUrl} from "../api-url";
import {map} from 'rxjs/operators';
import {SourcesClass} from "../users-table/sources.class";

@Injectable({
  providedIn: 'root'
})
export class TableServiceService {

  constructor(private http: HttpClient) {
  }

  //users get request
  getUsers(): Observable<userInfoClass[]> {
    return this.http.get<userInfoClass[]>(apiUrl + '?page=2').pipe(map((data: any) => {
      let userList = data['data'];
      return userList.map(function (user: any): userInfoClass {
        return new userInfoClass(user.id, user.email, user.first_name, user.last_name, user.avatar);
      });
    }));
  }


  //sources get request
  getSources(): Observable<SourcesClass[]> {
    return this.http.get<SourcesClass[]>(apiUrl + 'unknown').pipe(map((data: any) => {
      let sourceList = data['data'];
      return sourceList.map(function (source: any): SourcesClass {
        return new SourcesClass(source.id, source.name, source.year, source.color, source.pantone_value);
      });
    }));
  }

  //user delete request
  deleteUser(user: userInfoClass): Observable<any> {
    return this.http.delete(apiUrl + `/${user.id}`);
  }

}
