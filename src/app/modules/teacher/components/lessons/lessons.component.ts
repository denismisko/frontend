import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { Lessons } from 'src/app/modules/shared/lessons/lessons';
import { LessonsService } from 'src/app/modules/shared/lessons/lessons.service';
import { UtilityService } from 'src/app/modules/shared/utility/utility.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss'],
})
export class LessonsComponent {
  classes: Classes[] = [];
  lessons: Lessons[] = [];
  chunkedLessons: Lessons[][] = [];

  @ViewChild('content') content!: ElementRef;

  selectedLesson: any;
  selectedClassTitle: any;
  classTitle!: string | null;

  constructor(
    private classesService: ClassesService,
    private lessonsService: LessonsService,
    private utilityService: UtilityService,
    private lessonService: LessonsService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.classes = this.classesService.getClasses();
    this.lessons = this.lessonsService.getLessons();
    this.chunkedLessons = this.utilityService.chunkArray(this.lessons, 3);
    this.onClassClick('1.N');
  }

  onClassClick(classTitle: string): void {
    this.selectedClassTitle = classTitle;
    this.lessonService.getSubject(classTitle).subscribe((subjects) => {
      if (subjects && subjects.length) {
        this.lessons = subjects;
        this.chunkedLessons = this.utilityService.chunkArray(this.lessons, 3);
      } else {
        this.lessons = [];
        this.chunkedLessons = [];
      }
    });
  }

  openModal(subject: any) {
    this.selectedLesson = subject;
    this.modalService.open(this.content, {
      centered: true,
    });
  }

  onDeleteSubject(lesson: any): void {
    this.selectedLesson = lesson;
    this.lessonService
      .deleteSubject(this.selectedLesson.title, this.selectedClassTitle)
      .subscribe(() => {
        this.router.navigate(['/teacher/lessons']).then(() => {
          window.location.reload();
        });
        alert('Lesson deleted successfully!');
        this.lessons = this.lessons.filter(
          (t) => t.title !== this.selectedLesson.title
        );
        this.chunkedLessons = this.utilityService.chunkArray(this.lessons, 3);
      });
  }
}
