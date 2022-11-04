import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'front';
  colorMode: string = 'light'

  // chargement de la charte visuel en fonction du local storage
  ngOnInit() {

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

  getTheme(theme : string){
    console.log(theme);
    this.colorMode = theme
    
    
  }

}

