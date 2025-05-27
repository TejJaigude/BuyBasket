import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = { username: '',email:'', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.registerUser(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }

}
