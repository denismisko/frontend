import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Reviews } from './reviews';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private apiUrl = 'http://localhost:8080';

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
}
