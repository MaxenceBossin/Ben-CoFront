import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentFilter = "";

  constructor() { }

  ngOnInit(): void {
  }

  getFilter(param: any) {
    console.log('fix home' , param);
    this.currentFilter = param;
    console.log('fix current', this.currentFilter);
  }
}
