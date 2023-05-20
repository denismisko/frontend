import { Component } from '@angular/core';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Tasks } from 'src/app/modules/shared/tasks/task';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';
import { UtilityService } from 'src/app/modules/shared/utility/utility.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {

  classes: Classes[] = [];
  tasks: Tasks[] = [];

  chunkedTasks: Tasks[][] = []; // utilityService - dokaze udrziavat hodnotu comlumns v jednom riadku, napr 3 etc.

  constructor(private classService: ClassesService, private utilityService: UtilityService, private taskService: TasksService) {}

  ngOnInit() {
    this.classes = this.classService.getClasses();
    this.tasks = this.taskService.getTasks();
    this.chunkedTasks = this.utilityService.chunkArray(this.tasks, 3)
  }
}
