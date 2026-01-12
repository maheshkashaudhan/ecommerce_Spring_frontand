import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrls: ['./login.css']  ,
})
export class Login {
  
  router = inject(Router);
  onLogin() {
    this.router.navigate(['/dashboard']);
  }

}
