import { Component } from '@angular/core';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Lessons } from 'src/app/modules/shared/lessons/lesson';
import { LessonsService } from 'src/app/modules/shared/lessons/lessons.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent {
    
  classes: Classes[] = [];
  lessons: Lessons[] = [];

  constructor(private classesService: ClassesService, private lessonsService: LessonsService) { }

  ngOnInit(): void {
    this.classes = this.classesService.getClasses();
    this.lessons = this.lessonsService.getLessons();
  }

  chunkArray(array: Lessons[], chunkSize: number): Lessons[][] {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
      array.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }

}
