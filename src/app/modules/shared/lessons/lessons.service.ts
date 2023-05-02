import { Injectable } from '@angular/core';
import { Lessons } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {

  private lessons: Lessons[] = [ 

    {subject:"Pro",name:"Roland Onofrej"},
    {subject:"Pro",name:"Roland Onofrej"},
    {subject:"Pro",name:"Roland Onofrej"},
    {subject:"Pro",name:"Roland Onofrej"},
    {subject:"Pro",name:"Roland Onofrej"},
    {subject:"Pro",name:"Roland Onofrej"},
    {subject:"Pro",name:"Roland Onofrej"},
    {subject:"Pro",name:"Roland Onofrej"},

  ];

  constructor() { }

  getLessons(): Lessons[] {
    return this.lessons;
  }

}
