import { Injectable, OnInit } from '@angular/core';
import { Students } from './students';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService implements OnInit {
  private apiUrl = '/api'; // put your API URL here

  constructor(private http: HttpClient) {}

  addStudent(student: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post<any>(`${this.apiUrl}/student`, student, httpOptions);
  }

  getStudent(classTitle: string): Observable<Students[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http
      .get<Students[]>(`${this.apiUrl}/student/${classTitle}`, httpOptions)
      .pipe(
        map((student: Students[]) => {
          this.students = student;
          return this.students;
        })
      );
  }

  editStudent(oldUsername: string, newStudent: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };

    const body = { oldStudentUsername: oldUsername, newStudent: newStudent };

    return this.http.put<any>(`${this.apiUrl}/student`, body ,httpOptions);
  }

  deleteStudent(username: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
      body: { username: username },
    };
    return this.http.delete(`${this.apiUrl}/student`, httpOptions);
  }

  students: Students[] = [];

  ngOnInit(): void {}

  getStudents(): Students[] {
    return this.students;
  }
}
