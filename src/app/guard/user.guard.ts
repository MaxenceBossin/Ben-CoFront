import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from 'src/app/service/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private serviceJwt: JwtService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const jwtToken = localStorage.getItem('jwtToken')
    if(jwtToken != null) {
      const role = this.serviceJwt.getJwtRole(jwtToken)
      if(role == "ROLE_USER"){
        return true
      }
    }
    return false;
  }
}
