import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherDashboardService {
  private apiUrl = 'http://localhost:8080';

  constructor(
    private http: HttpClient
  ) {}

  getDashoboardInformations(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get<any>(`${this.apiUrl}/teacher/dashboard`, httpOptions)
  }
}
