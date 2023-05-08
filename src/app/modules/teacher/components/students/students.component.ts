import { Component } from '@angular/core';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Students } from 'src/app/modules/shared/students/students';
import { StudentsService } from 'src/app/modules/shared/students/students.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent {
  classes: Classes[] = [];

  students : Students[] = []

  constructor(private studentsService: StudentsService, private classesService: ClassesService){}

  selectedStudentName : string = "";
  selectedStudentEmail : string = "";
  // selectedStudentPnumber : string = "";
  // inProgressTasks: number = 0;
  // submittedTasks: number = 0;
  // unsubmittedTasks: number = 0;

  onSelectedStudent(student: Students):void {
      this.selectedStudentName = student.name;
      this.selectedStudentEmail = student.email;
      // this.selectedStudentPnumber = student.pnumber;
      // this.inProgressTasks = student.inProgressTasks;
      // this.submittedTasks = student.submittedTasks;
      // this.unsubmittedTasks = student.unsubmittedTasks;
    };

    ngOnInit(): void {
      this.classes = this.classesService.getClasses();
      this.students = this.studentsService.getStudents();
  }

}
