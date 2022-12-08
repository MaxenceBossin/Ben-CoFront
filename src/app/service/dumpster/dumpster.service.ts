import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class DumpsterService {

  url = environment.api_url;
  httpsOption ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    })
  }

  constructor(private http: HttpClient) { }

  getAllDumpsters(): Observable<Array<any>>{
    return this.http.get<Array<any>>(this.url + 'showDumpster' , this.httpsOption);
  }

}
