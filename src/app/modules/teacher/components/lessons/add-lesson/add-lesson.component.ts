import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LessonsService } from 'src/app/modules/shared/lessons/lessons.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss'],
})
export class AddLessonComponent implements OnInit {
  subjectForm!: FormGroup;
  selectedValue!: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private lessonService: LessonsService
  ) {}

  ngOnInit(): void {
    this.onSubjectForm();
  }

  onSubjectForm() {
    this.subjectForm = this.formBuilder.group({
      title: [''],
      classTitle: [''],
    });
  }

  onSubmit() {
    this.lessonService.addSubject(this.subjectForm.value).subscribe(() => {
      this.router.navigate(['/teacher/lessons']).then(() => {
        window.location.reload();
      });
      alert('Lesson was successfully added!');
    });
  }
}
