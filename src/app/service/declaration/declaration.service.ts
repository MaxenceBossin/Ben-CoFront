import { Declaration } from './../../modules/garbage-collector/model/declaration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  url = 'https://127.0.0.1:8000/api/addSupport';
  constructor(private http: HttpClient) { }

  postDeclaration(declaration: Declaration) {
    console.log(declaration);

    return this.http.post(this.url, declaration);
  }
}
