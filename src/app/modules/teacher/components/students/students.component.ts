import { Component, ElementRef, ViewChild } from '@angular/core';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Students } from 'src/app/modules/shared/students/students';
import { StudentsService } from 'src/app/modules/shared/students/students.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SelectedStudent } from 'src/app/modules/shared/students/selected-student/selected-student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent {
  classes: Classes[] = [];

  students: Students[] = [];

  @ViewChild('content') content!: ElementRef;

  selectedStudent: any;
  classTitle!: string | null;
  selectedClassTitle: any;

  constructor(
    private studentsService: StudentsService,
    private classesService: ClassesService,
    private modalService: NgbModal,
    private router: Router,
    private route: ActivatedRoute,
    private selectedStudentService: SelectedStudent 
  ) {}

  selectedStudentName: string = '';
  selectedStudentSurname: string = '';
  selectedStudentUsername: string = '';

  onSelectedStudent(student: Students): void {
    this.selectedStudentName = student.name;
    this.selectedStudentSurname = student.surname;
    this.selectedStudentUsername = student.username;

    this.selectedStudentService.changeUsername(this.selectedStudentUsername);
  }

  ngOnInit(): void {
    this.classes = this.classesService.getClasses();
    this.students = this.studentsService.getStudents();
    this.onClassClick('1.N');
  }

  openModal(studentName: string) {
    this.selectedStudent = studentName;
    this.modalService.open(this.content, {
      centered: true,
      windowClass: 'centeredModal',
    });
  }

  onClassClick(classTitle: string): void {
    this.selectedClassTitle = classTitle;
    this.studentsService.getStudent(classTitle).subscribe((tasks) => {
      if (tasks && tasks.length) {
        this.students = tasks;
      } else {
        this.students = [];
      }
    });
  }

  onDeleteStudent(student: any): void {
    this.studentsService.deleteStudent(student).subscribe(() => {
      this.router.navigate(['/teacher/students']).then(() => {
        window.location.reload();
      });
      alert('Student deleted successfully!');
      this.students = this.students.filter(
        (s) => s.username !== student.username
      );
    });
  }
}
