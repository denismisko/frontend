import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentDashboardService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getDashboardInformations(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get<any>(`${this.apiUrl}/student/dashboard`, httpOptions);
  }

  getDashboardInformationsBySubject(subjectTitle: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.get<any>(
      `${this.apiUrl}/student/dashboard/${subjectTitle}`,
      httpOptions
    );
  }

  updateTaskStatus(taskID: string, status: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };

    const body = { taskID: taskID, status: status };

    return this.http.put<any>(
      `${this.apiUrl}/student/dashboard/change-status`,
      body,
      httpOptions
    );
  }
}
