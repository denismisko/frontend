import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Reviews } from './reviews';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) {}

  getReview(classTitle: string): Observable<Reviews[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
    return this.http
      .get<Reviews[]>(`${this.apiUrl}/review/${classTitle}`, httpOptions)
      .pipe(
        map((task: Reviews[]) => {
          this.reviews = task;
          return this.reviews;
        })
      );
  }

  reviews: Reviews[] = [];

  getReviews(): Reviews[] {
    return this.reviews;
  }

  reviewFix(taskID: string, studentID: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };

    const body = { taskID: taskID, studentID: studentID };

    return this.http.put<any>(
      `${this.apiUrl}/review/fix`,
      body,
      httpOptions
    );
  }

  reviewDone(taskID: string, studentID: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }),
    };

    const body = { taskID: taskID, studentID: studentID };

    return this.http.put<any>(
      `${this.apiUrl}/review/done`,
      body,
      httpOptions
    );
  }
}
