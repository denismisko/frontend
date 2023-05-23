import { Component, ElementRef, ViewChild } from '@angular/core';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Tasks } from 'src/app/modules/shared/tasks/task';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';
import { UtilityService } from 'src/app/modules/shared/utility/utility.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentsService } from 'src/app/modules/shared/students/students.service';
import { Students } from 'src/app/modules/shared/students/students';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  classes: Classes[] = [];
  tasks: Tasks[] = [];
  students: Students[] = [];

  chunkedTasks: Tasks[][] = []; // utilityService - dokaze udrziavat hodnotu comlumns v jednom riadku, napr 3 etc.

  selectedTask: any;

  @ViewChild('content') content!: ElementRef;

  selectedStudentName: string = '';
  selectedStudentEmail: string = '';

  onSelectedStudent(student: Students): void {
    this.selectedStudentName = student.name;
    this.selectedStudentEmail = student.email;
  }

  constructor(
    private classService: ClassesService,
    private utilityService: UtilityService,
    private taskService: TasksService,
    private modalService: NgbModal,
    private studentService: StudentsService
  ) {}

  ngOnInit() {
    this.classes = this.classService.getClasses();
    this.tasks = this.taskService.getTasks();
    this.chunkedTasks = this.utilityService.chunkArray(this.tasks, 3);
  }

  openModal(task: any) {
    this.selectedTask = task;
    this.modalService.open(this.content, {
      centered: true,
    });
  }
}
