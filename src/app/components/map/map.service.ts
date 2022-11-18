import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  url = 'https://127.0.0.1:8000/api/showDumpster';
  constructor(private http: HttpClient) { }

  getDumpster() {
    return this.http.get(this.url);
  }
}
