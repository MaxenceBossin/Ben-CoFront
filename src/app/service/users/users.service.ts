import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = 'https://127.0.0.1:8000/api/showUsers';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.users);

}
}