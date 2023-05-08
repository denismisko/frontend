import { Injectable } from '@angular/core';
import { Students } from './students';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  private students: Students[] = [
    {
      "name":"Denis Miškolci", 
      "email":"macka@gmail.com", 
    },
    {
      "name":"Jakub Kočan", 
      "email":"pes@gmail.com", 
    },
  ];

  constructor() { }

  getStudents(): Students[] {
    return this.students;
  }
}
