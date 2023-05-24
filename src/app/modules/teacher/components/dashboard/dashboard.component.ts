import { Component, OnInit } from '@angular/core';
import { Students } from 'src/app/modules/shared/students/students';
import { StudentsService } from 'src/app/modules/shared/students/students.service';
import { Tasks } from 'src/app/modules/shared/tasks/task';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  tasks: Tasks[] = [];

  constructor(
    private taskService: TasksService,
    ) {}
  
  ngOnInit() {
       this.taskService.getAllTasks().subscribe((tasks) => {
         this.tasks = tasks;
       });
  }
}
