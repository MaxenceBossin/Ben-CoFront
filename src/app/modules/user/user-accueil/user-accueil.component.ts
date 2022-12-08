import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-accueil',
  templateUrl: './user-accueil.component.html',
  styleUrls: ['./user-accueil.component.css']
})
export class UserAccueilComponent implements OnInit {
  currentFilter = -1;
  currentFilterType = "";

  constructor() { }

  ngOnInit(): void {
  }

  getFilter(param: any) {
    this.currentFilter = param;
  }

  getFilterType(param: any) {
    console.log('fix paramType', param);
    this.currentFilterType = param;
    console.log('fix currentFilterType', this.currentFilterType);
  }

}
