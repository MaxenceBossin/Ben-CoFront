import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  theme: string | null = localStorage.getItem('colorMode');
  themehtml: string | null = ''
  @Output() newThemeEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.theme)
    if (this.theme == null) {
      this.theme = 'light'
      this.themehtml = 'light'
    }


  }

  toggleTheme() {
    if (this.theme == 'dark') {
      this.theme = 'light'
      this.themehtml = 'light'
      localStorage.setItem('colorMode', 'light');

    } else {
      this.theme = 'dark'
      this.themehtml = 'dark'
      localStorage.setItem('colorMode', 'dark');
    }

    this.newThemeEvent.emit(this.theme);
  }

}
