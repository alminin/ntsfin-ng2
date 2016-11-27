import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(private router: Router) {}

  goLogin() {
    this.router.navigate(['/login']);
  }

  goSignup() {
    this.router.navigate(['/signup']);
  }
}
