import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.html',
  styleUrls: ['./logout.css'] ,
})
export class Logout {
  private router = inject(Router);

  constructor() {
    // Clear user session or authentication tokens here
    // For example: localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }


}