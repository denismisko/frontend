import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

 login({ email, password }: any): Observable<any> {
  if (email === 'admin' && password === 'admin123') {
    this.setToken('abcdefghijklmnopqrstuvwxyz');
    return of({ name: 'Tarique Akhtar', email: 'admin@gmail.com', role: 'admin' });
  } else if (email === 'student' && password === 'student123') {
    this.setToken('user-token-xyz');
    return of({ name: 'John Doe', email: 'user@example.com', role: 'user' });
  }
  return throwError(new Error('Failed to login'));
}

}
