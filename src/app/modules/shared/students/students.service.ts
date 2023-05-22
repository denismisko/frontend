import { Injectable, OnInit } from '@angular/core';
import { Students } from './students';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService implements OnInit {

  constructor(private http: HttpClient) {}

   students: Students[] = [
  ];

  ngOnInit(): void {
    
  }

  getStudents(): Students[] {
    return this.students;
  }
}
