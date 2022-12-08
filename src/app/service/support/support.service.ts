import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  url = environment.api_url;

  httpsOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    }),
  }

    constructor(private http: HttpClient) { }
    
    getAll() {
      return this.http.get(this.url + 'supports')
    }

    getOne(id:number) {
      return this.http.get(this.url + 'support/' + id)
    }

    patchStatus(id: number, status : any){
      return this.http.patch(this.url +'support/' + id, status)
    }
}
