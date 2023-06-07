
import { Injectable, OnInit } from '@angular/core';
import { Observable, map, of, tap, throwError, catchError } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
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
    localStorage.removeItem('name');
    localStorage.removeItem('surname');
    this.router
      .navigate(['login'])
      .catch((err) => {
        console.error(err);
      });
  }

  private apiUrl = '/api'; // Replace with your backend API URL

  constructor(private http: HttpClient, private router: Router) {} // Injected Router

  ngOnInit(): void {}

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http
      .post<any>(`${this.apiUrl}/login`, credentials, { observe: 'response' })
      .pipe(
        tap((response) => {
          const authHeader = response.headers.get('Authorization');
          if (authHeader) {
            const token = authHeader.split(' ')[1]; // Assuming 'Bearer <token>' format
            this.setToken(token);
          }

          const authBody = response.body;
            if (authBody && authBody.name && authBody.surname) {
            const name = authBody.name;
            const surname = authBody.surname;

            localStorage.setItem("name", name);
            localStorage.setItem("surname", surname);
          }
          
        }),
        map((response) => response.body), 
        catchError((error) => {
          if (error.status === 401) {
            alert('Wrong username or password.');
            throw new Error('Wrong username or password.');
          } else {
            alert('Failed to connect to the server.');
            throw new Error('Failed to connect to the server.');
          }
        })
      );
  }

}
