import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials = { username: '', password: '' };
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.loginUser(this.credentials).subscribe({
      next: (res: any) => {
        console.log("Login response:", res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      error: () => {
        this.errorMessage = 'Invalid credentials';
      }
    });
  }

}
