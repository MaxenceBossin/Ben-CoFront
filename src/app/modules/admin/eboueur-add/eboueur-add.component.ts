import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
import { UserService } from 'src/app/service/user/user.service';
import { I_EmailForm } from 'src/app/interfaces/email-form';
@Component({
  selector: 'app-eboueur-add',
  templateUrl: './eboueur-add.component.html',
  styleUrls: ['./eboueur-add.component.css']
})
export class EboueurAddComponent implements OnInit {
  isSubmitted: boolean = false
  subscribe: any
  form: I_EmailForm = {
    email: ''
  }
  constructor(private UserService : UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(addForm: NgForm) {
    this.form.email = addForm.value.email
    this.subscribe = this.UserService.setGarbageCollector(addForm.value).subscribe({
      next: (data) => console.info('donnée envoyé', data),
      error: (e) => console.error(e),
      complete: () => this.router.navigate(['/admin/eboueurs/'])
    })
  }

  redirect(){
    this.router.navigate(['/admin/eboueurs/'])
  }

}
