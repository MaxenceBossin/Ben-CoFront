import { Injectable } from '@angular/core';
import jwtDecode, { JwtPayload } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  jwtDecode?: any;

  constructor() { }

  getJwtRole(jtwToken : string ) {
    this.jwtDecode =  jwtDecode(jtwToken);
    console.log(this.jwtDecode);
    
    if(this.jwtDecode.roles.includes('ROLE_ADMIN')) {
      return 'ROLE_ADMIN'
    }
    if(this.jwtDecode.roles.includes('ROLE_GARBAGE_COLLECTOR')) {
      return 'ROLE_GARBAGE_COLLECTOR'
    }
    if(this.jwtDecode.roles.includes('ROLE_USER')) {
      return 'ROLE_USER'
    }
    return 'error'
  }
}
