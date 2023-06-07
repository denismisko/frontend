import { Injectable } from '@angular/core';
import { Tasks } from './task';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TasksComponent } from '../../teacher/components/tasks/tasks.component';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private apiUrl = '/api'; // put your API URL here

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

  deleteTask(taskID:string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
      body: { ID: taskID }, 
    };
    return this.http.delete(`${this.apiUrl}/task`, httpOptions);
  }

  private tasks: Tasks[] = [];

  getTasks(): Tasks[] {
    return this.tasks;
  }
}
