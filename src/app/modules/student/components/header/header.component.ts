import { Component, EventEmitter, Output } from '@angular/core';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Tasks } from 'src/app/modules/shared/tasks/task';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    showMenu = false;

    showSideNavbar = false;
    @Output() sideNavbarToggled = new EventEmitter<boolean>();

    toggleSideNavbar() {
      this.showSideNavbar = !this.showSideNavbar;
      this.sideNavbarToggled.emit(this.showSideNavbar);
    }

    tasks: Tasks[] = [];

    constructor( private tasksService: TasksService) { }

    ngOnInit():void {
     this.tasks = this.tasksService.getTasks();
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