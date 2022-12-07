import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users/users.service';


@Component({
  selector: 'app-eboueur',
  templateUrl: './eboueur.component.html',
  styleUrls: ['./eboueur.component.css']
})
export class EboueurComponent implements OnInit {

  constructor(private UsersService : UsersService) { }
  listUsers : any

  ngOnInit() {
    this.UsersService.getUsers().subscribe((data: any) => {
      this.listUsers = data;
    })
  }
}