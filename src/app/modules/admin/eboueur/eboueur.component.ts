import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"

@Component({
  selector: 'app-eboueur',
  templateUrl: './eboueur.component.html',
  styleUrls: ['./eboueur.component.css']
})
export class EboueurComponent implements OnInit, OnDestroy {
  listUsers : any
  garbageCollectors?: any
  subscribe : any

  constructor(private UserService : UserService,  private router: Router) { 
  }

  ngOnInit() {
    this.subscribe = this.UserService.getUsers().subscribe((users: any) => {
      this.listUsers = users
      this.garbageCollectors = users.filter((u:any) => {
      return u.roles.includes('ROLE_GARBAGE_COLLECTOR')
      })
    })
    
    
  }

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe()
  }

  redirectAdd(): void{
    this.router.navigate(['/admin/eboueurs/ajout'])
  }

  redirectEdit(id:number): void{
    this.router.navigate(['/admin/eboueurs/modifier/'+id])
  }

}