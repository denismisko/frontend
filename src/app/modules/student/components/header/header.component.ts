import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Tasks } from 'src/app/modules/shared/tasks/task';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TasksComponent } from 'src/app/modules/teacher/components/tasks/tasks.component';
import { Classes } from 'src/app/modules/shared/class.model';
import { Students } from 'src/app/modules/shared/students/students';
import { StudentsService } from 'src/app/modules/shared/students/students.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  user!: {
    name: string;
    surname: string;
  } | null;

  showMenu = false;

  showSideNavbar = false;

  @Output() sideNavbarToggled = new EventEmitter<boolean>();

  toggleSideNavbar() {
    this.showSideNavbar = !this.showSideNavbar;
    this.sideNavbarToggled.emit(this.showSideNavbar);
  }

  tasks: Tasks[] = [];
  students: Students[] = [];

  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
    private studentService: StudentsService,
  ) {}

  ngOnInit(): void {
    this.getUsernameAndSurname();
    this.studentService.getStudents();
    this.tasks = this.tasksService.getTasks();
  }

  getUsernameAndSurname(){
     const storedName = localStorage.getItem('name');
     const storedSurname = localStorage.getItem('surname');

     if (storedName && storedSurname) {
       this.user = {
         name: storedName,
         surname: storedSurname,
       };
     } else {
       this.user = null;
     }
  }

  logout(): void {
    this.authService.logout();
  }
}
