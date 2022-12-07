import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.api_url;

  httpsOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    })
  }
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User>{
    return this.http.get<User>(this.url + 'showUsers' ,this.httpsOption)
  }

  setGarbageCollector(email: string) {
    return this.http.put(this.url + 'setGarbageCollector', email, this.httpsOption)
  }

  setUser(id: any) {
    return this.http.patch(this.url + 'removeGarbageCollector/' + id, '', this.httpsOption)
  }



}
