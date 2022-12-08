import { I_LoginForm } from './../../../interfaces/login-form';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
import { AuthService } from './../../../service/auth/auth.service';
import { JwtService } from 'src/app/service/jwt.service';
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
  jwtToken?: string;
  isSubmitted : boolean = false;

  constructor(
    private serviceAuth: AuthService,
    private serviceJwt: JwtService,
    private router: Router) { }

  onSubmit(loginForm: NgForm) {
    this.form.email    = loginForm.value.email
    this.form.password = loginForm.value.password

    // Si la connexion est valide on stock le token en local storage +  TODO : rediriger vers la page d'accuiel
    this.serviceAuth.login(this.form).subscribe({
      next: (data) => {
        this.serviceAuth.saveToken(data.token),
        this.jwtToken = data.token
      },
      error: (e) => console.error(e),
      complete: () => {
        console.info('connection success')
        // redirection de l'utilisateur en fonction de son rôle
        if (this.jwtToken != undefined) {
          const role = this.serviceJwt.getJwtRole(this.jwtToken)
          switch (role) {
            case 'ROLE_ADMIN':
              return this.router.navigate(['/admin/planning'])
            case 'ROLE_GARBAGE_COLLECTOR':
              return this.router.navigate(['/eboueurs/trajets'])
            case 'ROLE_USER':
              return this.router.navigate(['/utilisateur/userAccueil'])
          }
        }        
        // en cas de token erroné
        return console.log('erreur');
         // TODO
      }
    })
  }
}
