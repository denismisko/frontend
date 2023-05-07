import { Injectable } from '@angular/core';
import { Tasks } from './task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private tasks: Tasks[] = [];

  constructor() { }

  getTasks(): Tasks[]{
    return this.tasks;
  }
}
