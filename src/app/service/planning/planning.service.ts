import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  url = environment.api_url;

  httpsOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
    }),


  }
  constructor(private http: HttpClient) { }

  getPlanning(date: Date) {

    return this.http.post(this.url + 'getPlanning', date, this.httpsOption)
  }

  sendPlanning(data:any){
    return this.http.post(this.url + 'addPlanning', data, this.httpsOption)
  }


}
