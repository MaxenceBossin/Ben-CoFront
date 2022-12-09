import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-gc',
  templateUrl: './header-gc.component.html',
  styleUrls: ['./header-gc.component.css']
})
export class HeaderGcComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
