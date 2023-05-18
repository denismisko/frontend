import { Injectable } from '@angular/core';
import {Observable, map, of, tap, throwError, catchError} from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { write } from '@popperjs/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

 private apiUrl = 'http://10.2.130.81:8080'; // Replace with your backend API URL

  constructor(private http: HttpClient, private router: Router) {} // Injected Router

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials, { observe: 'response' }).pipe(
      tap(response => {
        const authHeader = response.headers.get('Authorization');
        if (authHeader) {
          const token = authHeader.split(' ')[1]; // Assuming 'Bearer <token>' format
          this.setToken(token);
        }
      }),
      map(response => response.body), // map the full HttpResponse to its body
      catchError(error => {
        if (error.status === 401) {
          throw new Error('Nesprávne meno alebo heslo.');
        } else {
          throw new Error('Prihlásenie zlyhalo.');
        }
      })
    );
  }
}
