import { Component } from '@angular/core';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Lessons } from 'src/app/modules/shared/lessons/lesson';
import { LessonsService } from 'src/app/modules/shared/lessons/lessons.service';
import { UtilityService } from 'src/app/modules/shared/utility/utility.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent {
  classes: Classes[] = [];
  lessons: Lessons[] = [];
  chunkedLessons: Lessons[][] = [];

  constructor(
    private classesService: ClassesService,
    private lessonsService: LessonsService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {
    this.classes = this.classesService.getClasses();
    this.lessons = this.lessonsService.getLessons();
    this.chunkedLessons = this.utilityService.chunkArray(this.lessons, 3);
  }
}
