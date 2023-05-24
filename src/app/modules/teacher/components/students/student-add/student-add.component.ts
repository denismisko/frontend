import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/modules/shared/students/students.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss'],
})
export class StudentAddComponent implements OnInit {
  studentForm!: FormGroup;
  selectedValue!: string;

  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      username: [''],
      name: [''],
      surname: [''],
      classTitle: [''],
    });
  }

  onSubmit() {
    this.studentService
      .addStudent(this.studentForm.value)
      .subscribe((response) => {
        console.log(this.studentForm);
        this.router.navigate(['/teacher/students']);
        alert('Student was successfully added!');
      });
  }

}
