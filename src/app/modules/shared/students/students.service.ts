import { Injectable, OnInit } from '@angular/core';
import { Students } from './students';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService implements OnInit {
  private apiUrl = 'http://localhost:8080'; // put your API URL here

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

  students: Students[] = [
    {
      username: 'Denis',
      name: 'Jozo',
      surname: 'coze',
      email: 'jakoo',
      classTitle: '1.N',
    },
    {
      username: 'Denis',
      name: 'Jozo',
      surname: 'coze',
      email: 'jakoo',
      classTitle: '1.N',
    },
    {
      username: 'Denis',
      name: 'Jozo',
      surname: 'coze',
      email: 'jakoo',
      classTitle: '1.N',
    },
    {
      username: 'Denis',
      name: 'Jozo',
      surname: 'coze',
      email: 'jakoo',
      classTitle: '1.N',
    },
    {
      username: 'Denis',
      name: 'Jozo',
      surname: 'coze',
      email: 'jakoo',
      classTitle: '1.N',
    },
    {
      username: 'Denis',
      name: 'Jozo',
      surname: 'coze',
      email: 'jakoo',
      classTitle: '1.N',
    },
    
  ];

  ngOnInit(): void {}

  getStudents(): Students[] {
    return this.students;
  }
}
