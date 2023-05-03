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
  if (email === 'teacher' && password === 'teacher123') {
    this.setToken('abcdefghijklmnopqrstuvwxyz');
    return of({ name: 'Roland Onofrej', email: 'teacher@gmail.com', role: 'teacher' });
  } else if (email === 'student' && password === 'student123') {
    this.setToken('user-token-xyz');
    return of({ name: 'Jakub Kočan', email: 'student@example.com', role: 'student' });
  }
  return throwError(new Error('Failed to login'));
}

}
