import { I_LoginForm } from './../../../interfaces/login-form';
import { I_JWTToken } from './../../../interfaces/jwttoken';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../../service/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['../auth.component.css']
})
export class FormLoginComponent implements OnInit {

  form: I_LoginForm = {
    email: '',
    password: ''
  }

  constructor(private serviceAuth: AuthService, private http:HttpClient) { }

  ngOnInit(): void {

  }

  onSubmit(loginForm: NgForm) {
    this.form.email    = loginForm.value.email
    this.form.password = loginForm.value.password

    console.log('h' , this.form);
    // Si la connexion est valide on stock le token en local storage +  TODO : rediriger vers la page d'accuiel
    this.serviceAuth.login(this.form).subscribe({
      next: (data) => this.serviceAuth.saveToken(data.token),
      error: (e) => console.error(e),
      complete: () => console.info('connection success') 
    })

  }

}
