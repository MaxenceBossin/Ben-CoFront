
import { I_JWTToken } from 'src/app/interfaces/jwttoken';
import { I_LoginForm } from 'src/app/interfaces/login-form';

import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.api_url;
  urlLogin = environment.api_url_login;

  httpsOption ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  login(formData: I_LoginForm) : Observable<I_JWTToken>
  {
    return this.http.post<I_JWTToken>(this.urlLogin, formData)
  }

  logout(): void{
    return localStorage.removeItem('jwtToken')
  }
  
  register(){}

  isLogged() : boolean
  {
    if(localStorage.getItem('jwtToken') == null) return false
    return true
  }

  saveToken(token: string) : void
  {
    return localStorage.setItem('jwtToken', token)
  }

  
}
