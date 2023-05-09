import { Injectable } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';
import { Tasks } from '../tasks/task';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private taskService: TasksService) { }

  chunkArray<T>(array: T[], chunkSize: number): T[][] {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
      array.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }

   getPriorityClass(task: Tasks): string {
    switch (task.priority) {
      case "1":
        return 'priority-1';
      case "2":
        return 'priority-2';
      case "3":
        return 'priority-3';
      default:
        return '';
    }
  }
}
