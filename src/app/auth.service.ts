import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8000/api/auth';  // Django API base

  constructor(private http: HttpClient, private router: Router) { }

  registerUser(data: any) {
    return this.http.post(`${this.baseUrl}/register/`, data);
  }

  loginUser(data: any) {
  return this.http.post(`${this.baseUrl}/login/`, data).pipe(
    tap((res: any) => {
      localStorage.setItem('token', res.token);
    })
  );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
