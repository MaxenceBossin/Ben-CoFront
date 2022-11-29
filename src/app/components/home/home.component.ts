import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colorMode? : string
  currentFilter = "";

  constructor() { }

  ngOnInit(): void {
    this.toggleTheme()
  }

  getFilter(param: any) {
    console.log('fix home' , param);
    this.currentFilter = param;
    console.log('fix current', this.currentFilter);
  }

  toggleTheme(){
    switch (localStorage.getItem('colorMode')) {
      case 'light':
        this.colorMode = 'light'
        break;
      case 'dark':
        this.colorMode = 'dark'
        break;
      default:
        // cas si le local storage est null ou si la valeur n'est pas bonne 
        localStorage.setItem('colorMode', 'light');
        this.colorMode = 'light'

        break;

    }
  }

  getTheme(theme: string) {
    console.log(theme);
    this.colorMode = theme
  }

}
