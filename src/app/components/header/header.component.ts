import { Component, OnInit,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  theme: string|null = localStorage.getItem('colorMode');

  @Output() newThemeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if(this.theme == null){
      this.theme = 'dark'
    }
  }

  toggleTheme(){
    if(this.theme == 'dark'){
      this.theme = 'light'
      localStorage.setItem('colorMode', 'light');
      
    }else{
      this.theme = 'dark'
      localStorage.setItem('colorMode', 'dark');
    }

    this.newThemeEvent.emit(this.theme);
  }

}
