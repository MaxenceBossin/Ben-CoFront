import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeclarationService {

  // url = 'https://127.0.0.1:8000/api/insertDeclaration';
  constructor(private http: HttpClient) { }

  postDeclaration() {
    // return this.http.get(this.url);
  }

}
