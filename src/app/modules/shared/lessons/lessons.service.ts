import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Lessons } from './lessons';

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

  getSubject(classTitle: string): Observable<Lessons[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http
      .get<Lessons[]>(`${this.apiUrl}/subject/${classTitle}`, httpOptions)
      .pipe(
        map((lessons: Lessons[]) => {
          this.lessons = lessons;
          return this.lessons;
        })
      );
  }

  deleteSubject(title: string, classTitle:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
      body: { title: title, classTitle: classTitle },
    };
    return this.http.delete(`${this.apiUrl}/subject`, httpOptions);
  }

  private lessons: Lessons[] = [];

  getLessons(): Lessons[] {
    return this.lessons;
  }
}
