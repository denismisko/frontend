import { Component, ElementRef, ViewChild } from '@angular/core';
import { Classes } from 'src/app/modules/shared/class.model';
import { ClassesService } from 'src/app/modules/shared/classes.service';
import { UtilityService } from 'src/app/modules/shared/utility/utility.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReviewsService } from 'src/app/modules/shared/reviews/reviews.service';
import { Reviews } from 'src/app/modules/shared/reviews/reviews';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  classes: Classes[] = [];
  reviews: Reviews[] = [];

  chunkedReviews: Reviews[][] = []; // utilityService - dokaze udrziavat hodnotu comlumns v jednom riadku, napr 3 etc.

  selectedReview: any;
  classTitle!: string | null;
  selectedClassTitle: any;

  @ViewChild('content') content!: ElementRef;

  constructor(
    private classService: ClassesService,
    private utilityService: UtilityService,
    private modalService: NgbModal,
    private reviewService: ReviewsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.classes = this.classService.getClasses();
    this.reviews = this.reviewService.getReviews();
    this.chunkedReviews = this.utilityService.chunkArray(this.reviews, 3);
    this.onClassClick("1.N");
  }

  openModal(task: any) {
    this.selectedReview = task;
    this.modalService.open(this.content, {
      centered: true,
    });
  }

  truncateDescription(description: string, maxLength: number): string {
    return description.length > maxLength
      ? description.slice(0, maxLength) + '...'
      : description;
  }

  onClassClick(classTitle: string): void {
    this.selectedClassTitle = classTitle;
    this.reviewService.getReview(classTitle).subscribe((reviews) => {
      if (reviews && reviews.length) {
        this.reviews = reviews;
        this.chunkedReviews = this.utilityService.chunkArray(this.reviews, 3);
      } else {
        this.reviews = [];
        this.chunkedReviews = [];
      }
      this.router.navigate(['/teacher/reviews']);
    });
  }
}
