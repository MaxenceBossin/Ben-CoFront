import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  title: string = 'Connexion'
  phraseChangeForm: string = 'Pas de compte ? Inscrivez-vous'

  isLogin: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleForm(){
    this.isLogin = !this.isLogin;
  }

}
