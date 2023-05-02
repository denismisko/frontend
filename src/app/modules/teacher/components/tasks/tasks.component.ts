import { Component, Input } from '@angular/core';
import { retry } from 'rxjs';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Tasks } from 'src/app/modules/shared/tasks/task';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {

  classes: Classes[] = [];
  tasks: Tasks[] = [];

  @Input() showHeaderAndClasses: boolean = true;
  @Input() isStudentView: boolean = false;

  constructor(private classesService: ClassesService, private tasksService: TasksService) { }

  ngOnInit():void {
    this.classes = this.classesService.getClasses();
    this.tasks = this.tasksService.getTasks();
  }

  chunkArray(array: Tasks[], chunkSize: number): Tasks[][] {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
      array.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }

  truncateDescription(description: string, maxLength: number): string {
    return description.length > maxLength ? description.slice(0, maxLength) + '...' : description;
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
