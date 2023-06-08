import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TeacherDashboardService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getDashboardInformations(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get<any>(`${this.apiUrl}/teacher/dashboard`, httpOptions);
  }
}
