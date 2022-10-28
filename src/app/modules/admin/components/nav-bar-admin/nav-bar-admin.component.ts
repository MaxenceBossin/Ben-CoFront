import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrls: ['./nav-bar-admin.component.css']
})
export class NavBarAdminComponent implements OnInit {
  name = 'Get Current Url Route Demo';
  currentRoute: string | undefined;

  constructor(private router: Router) {
    // console.log(router.url);
    // router.events.filter((event: any) => event instanceof NavigationEnd)
    //   .subscribe((event: { url: string | undefined; }) => {
    //     this.currentRoute = event.url;
    //     console.log(event);
    //   });
  }
  ngOnInit(): void {
  }

}