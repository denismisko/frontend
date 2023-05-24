import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { retry } from 'rxjs';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Tasks } from 'src/app/modules/shared/tasks/task';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';
import { UtilityService } from 'src/app/modules/shared/utility/utility.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  classes: Classes[] = [];
  tasks: Tasks[] = [];
  chunkedTasks: Tasks[][] = [];

  classTitle!: string | null;
  selectedTask: any;

  @ViewChild('content') content!: ElementRef;

  @Input() showHeaderAndClasses: boolean = true;
  @Input() isStudentView: boolean = false;

  constructor(
    private classesService: ClassesService,
    private tasksService: TasksService,
    private utilityService: UtilityService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.classes = this.classesService.getClasses();
    this.tasks = this.tasksService.getTasks();
    this.chunkedTasks = this.utilityService.chunkArray(this.tasks, 3);
  }

  truncateDescription(description: string, maxLength: number): string {
    return description.length > maxLength
      ? description.slice(0, maxLength) + '...'
      : description;
  }

  openModal(task: any) {
    this.selectedTask = task;
    this.modalService.open(this.content, {
      centered: true,
    });
  }

  onClassClick(classTitle: string): void {
    this.tasksService.getTask(classTitle).subscribe((tasks) => {
      if (tasks && tasks.length) {
        this.tasks = tasks;
        this.chunkedTasks = this.utilityService.chunkArray(this.tasks, 3);
      } else {
        this.tasks = [];
        this.chunkedTasks = [];
      }
    });
  }
}
