import { Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Tasks } from 'src/app/modules/shared/tasks/task';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';
import { AuthService } from 'src/app/services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TasksComponent } from 'src/app/modules/teacher/components/tasks/tasks.component';
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

  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();

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

  truncateDescription(description: string, maxLength: number): string {
    return description.length > maxLength
      ? description.slice(0, maxLength) + '...'
      : description;
  }

}
