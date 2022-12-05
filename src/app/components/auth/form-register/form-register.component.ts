import { User } from './../../../model/user';
import { Component } from '@angular/core';
import { AuthService } from './../../../service/auth/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['../auth.component.css']
})
export class FormRegisterComponent {

  user = new User()
  passwordsValid : boolean = false

  constructor(private serviceAuth: AuthService) { }

  onSubmit(registerForm: NgForm) {
    this.user.email   = registerForm.value.email
    this.user.password = registerForm.value.password
    this.user.first_name = registerForm?.value.first_name
    this.user.last_name = registerForm?.value.last_name
    this.user.roles =""

    this.serviceAuth.register(this.user).subscribe({
      next: (data) => console.info('connexion en cours'),
      error: (e) => console.error(e),
      complete: () => console.info('register success') 
    })
  }

  verifyPassword(registerForm: NgForm){
    if(registerForm.value.password == registerForm.value.passwordConfirm){
      this.passwordsValid = true
    }else{
      this.passwordsValid = false
    }
  }



}
