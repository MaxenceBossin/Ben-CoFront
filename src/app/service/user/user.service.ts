import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {  
  url = environment.api_url;

  httpsOption ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User>{
    return this.http.get<User>(this.url + 'showUsers')
  }

}
