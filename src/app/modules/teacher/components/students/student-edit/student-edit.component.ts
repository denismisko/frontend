import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Students } from 'src/app/modules/shared/students/students';
import { StudentsService } from 'src/app/modules/shared/students/students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss'],
})
export class StudentEditComponent implements OnInit {

  ngOnInit(): void {
    
  }
}
