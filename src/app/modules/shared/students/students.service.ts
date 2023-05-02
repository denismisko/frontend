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
      "pnumber":"0951111111",
      "submittedTasks":5, 
      "unsubmittedTasks":8, 
      "inProgressTasks":4
    },
    {
      "name":"Jakub Kočan", 
      "email":"pes@gmail.com", 
      "pnumber":"0911111111", 
      "submittedTasks":8, 
      "unsubmittedTasks":4, 
      "inProgressTasks":4
    },
  ];

  constructor() { }

  getStudents(): Students[] {
    return this.students;
  }
}
