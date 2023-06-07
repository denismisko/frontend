import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectedStudent } from 'src/app/modules/shared/students/selected-student/selected-student.service';
import { Students } from 'src/app/modules/shared/students/students';
import { StudentsService } from 'src/app/modules/shared/students/students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss'],
})
export class StudentEditComponent implements OnInit {

  selectedStudentUsername!: string;
  editedStudentForm!: FormGroup;
  selectedValue!: string;

  constructor(
    private studentService: StudentsService,
    private formBuilder: FormBuilder,
    private router: Router,
    private selectedStudentService: SelectedStudent
  ) {}

  ngOnInit(): void {
    this.onStudentForm();
     this.selectedStudentService.currentUsername.subscribe(
       (username) => (this.selectedStudentUsername = username)
     );
  }

  onStudentForm() {
    this.editedStudentForm = this.formBuilder.group({
      Username: [''],
      Name: [''],
      Surname: [''],
      ClassTitle: [''],
      Password: [''],
    });
  }

  onSubmit() {
    const editedStudentForm = this.editedStudentForm.value;
    this.studentService
      .editStudent(this.selectedStudentUsername, editedStudentForm)
      .subscribe(() => {
        this.router.navigate(['/teacher/students']).then(() => {
          window.location.reload();
        });
        alert('Student was successfully edited!');
      });
  }
}
