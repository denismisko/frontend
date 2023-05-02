import { Injectable } from '@angular/core';
import { Classes } from './class.model';

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
   private classes: Classes[] = [
    { class: "1.N" },
    { class: "2.N" },
    { class: "3.N" },
  ];

  constructor() { }

  getClasses(): Classes[] {
    return this.classes;
  }
}
