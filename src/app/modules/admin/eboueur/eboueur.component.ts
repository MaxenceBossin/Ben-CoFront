import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eboueur',
  templateUrl: './eboueur.component.html',
  styleUrls: ['./eboueur.component.css']
})
export class EboueurComponent implements OnInit, OnDestroy {
  listUsers : any
  garbageCollectors?: any
  subscribe : any

  constructor(private UserService : UserService) { 
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
}