import { Injectable } from '@angular/core';
import { Tasks } from './task';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = 'http://localhost:8080'; // put your API URL here

  constructor(private http: HttpClient) {}

  addTask(task: Tasks) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http.post(`${this.apiUrl}/task`, task, httpOptions);
  }

  getTask(classTitle: string): Observable<Tasks[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };
    return this.http
      .get<Tasks[]>(`${this.apiUrl}/task/${classTitle}`, httpOptions)
      .pipe(
        map((task: Tasks[]) => {
          this.tasks = task;
          return this.tasks;
        })
      );
  }

  // getAllTasks(): Observable<Tasks[]> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`,
  //     }),
  //   };
  //   return this.http.get<Tasks[]>(`${this.apiUrl}/tasks`, httpOptions);
  // }

  private tasks: Tasks[] = [];

  getTasks(): Tasks[] {
    return this.tasks;
  }
}
