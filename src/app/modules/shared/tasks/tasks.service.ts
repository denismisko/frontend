import { Injectable } from '@angular/core';
import { Tasks } from './task';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private tasks: Tasks[] = [
    {
      title: 'Finish TypeScript Object',
      description: 'Create a TypeScript object based on given interface',
      lesson: 'PRO',
      status: 'Incomplete',
      deadline: '2023-05-15',
    },
    {
      title: 'Finish TypeScript Object',
      description: 'Create a TypeScript object based on given interface',
      lesson: 'PRO',
      status: 'Incomplete',
      deadline: '2023-05-15',
    },
    {
      title: 'Finish TypeScript Object',
      description:'Create a TypeScript object based on given interface',
      lesson: 'PRO',
      status: 'Incomplete',
      deadline: '2023-05-15',
    },
    {
      title: 'Finish TypeScript Object',
      description: 'Create a TypeScript object based on given interface',
      lesson: 'PRO',
      status: 'Incomplete',
      deadline: '2023-05-15',
    },
    {
      title: 'Finish TypeScript Object',
      description: 'Create a TypeScript object based on given interface',
      lesson: 'PRO',
      status: 'Incomplete',
      deadline: '2023-05-15',
    },
    {
      title: 'Finish TypeScript Object',
      description: 'Create a TypeScript object based on given interface',
      lesson: 'PRO',
      status: 'Incomplete',
      deadline: '2023-05-15',
    },
  ];

  constructor() {}

  getTasks(): Tasks[] {
    return this.tasks;
  }
}
