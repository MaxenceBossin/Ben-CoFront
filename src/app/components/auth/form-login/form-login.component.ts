import { I_LoginForm } from './../../../interfaces/login-form';
import { AuthService } from './../../../service/auth/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import jwtDecode, { JwtPayload } from "jwt-decode";
import {Router} from "@angular/router"



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['../auth.component.css']
})
export class FormLoginComponent{

  form: I_LoginForm = {
    email: '',
    password: ''
  }

  jwtDecode?: any;

  constructor(private serviceAuth: AuthService, private router: Router) { }

  onSubmit(loginForm: NgForm) {
    this.form.email    = loginForm.value.email
    this.form.password = loginForm.value.password

    // Si la connexion est valide on stock le token en local storage +  TODO : rediriger vers la page d'accuiel
    this.serviceAuth.login(this.form).subscribe({
      next: (data) => {
        this.serviceAuth.saveToken(data.token),
        this.jwtDecode =  jwtDecode<JwtPayload>(data.token);
      },
      error: (e) => console.error(e),
      complete: () => {
        console.info('connection success')
        // redirection de l'utilisateur en fonction de son rôle
        if(this.jwtDecode.roles.includes('ROLE_ADMIN')) {
          return this.router.navigate(['/admin/planning'])
        }
        if(this.jwtDecode.roles.includes('ROLE_GARBAGE_COLLECTOR')) {
          return this.router.navigate(['/']) // TODO
        }
        if(this.jwtDecode.roles.includes('ROLE_USER')) {
          return this.router.navigate(['/']) // TODO 
        }
        return ""
      }
    })

  }

}
