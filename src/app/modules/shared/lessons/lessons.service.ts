import { Injectable } from '@angular/core';
import { Lessons } from './lesson';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  addSubject(subject: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post<any>(`${this.apiUrl}/subject`, subject, httpOptions);
  }

  private lessons: Lessons[] = [
    { subject: 'Pro', name: 'Roland Onofrej' },
    { subject: 'Pro', name: 'Roland Onofrej' },
    { subject: 'Pro', name: 'Roland Onofrej' },
    { subject: 'Pro', name: 'Roland Onofrej' },
    { subject: 'Pro', name: 'Roland Onofrej' },
    { subject: 'Pro', name: 'Roland Onofrej' },
  ];

  getLessons(): Lessons[] {
    return this.lessons;
  }
}
