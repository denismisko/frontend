import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LessonsService } from 'src/app/modules/shared/lessons/lessons.service';

@Component({
  selector: 'app-add-lesson',
  templateUrl: './add-lesson.component.html',
  styleUrls: ['./add-lesson.component.scss']
})
export class AddLessonComponent implements OnInit {

  subjectForm!: FormGroup;
  selectedValue!: string;

  ngOnInit(): void {
    this.subjectForm = this.formBuilder.group({
      title: [''],
      classTitle: ['']
    });
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private lessonService: LessonsService
  ){}

  onSubmit(){
    this.lessonService.addSubject(this.subjectForm.value)
    .subscribe((res) => {
      console.log(res);
      this.router.navigate(['/teacher/lessons'])
      alert("Lesson was successfully added!")
    })
  }
  
}
