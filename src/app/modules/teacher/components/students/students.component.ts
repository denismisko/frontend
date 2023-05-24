import { Component, ElementRef, ViewChild } from '@angular/core';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Students } from 'src/app/modules/shared/students/students';
import { StudentsService } from 'src/app/modules/shared/students/students.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(
    private studentsService: StudentsService,
    private classesService: ClassesService,
    private modalService: NgbModal
  ) {}

  selectedStudentName: string = '';
  selectedStudentEmail: string = '';

  onSelectedStudent(student: Students): void {
    this.selectedStudentName = student.name;
    this.selectedStudentEmail = student.email;
  }

  ngOnInit(): void {
    this.classes = this.classesService.getClasses();
    this.students = this.studentsService.getStudents();
  }

  openModal(studentName: string) {
    this.selectedStudent = studentName;
    this.modalService.open(this.content, {
      centered: true,
      windowClass: 'centeredModal',
    });
  }
}
