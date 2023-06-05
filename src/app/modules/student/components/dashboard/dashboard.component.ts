import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Card, Subjects } from '../../students';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TasksService } from 'src/app/modules/shared/tasks/tasks.service';
import { Tasks } from 'src/app/modules/shared/tasks/task';
import { TasksComponent } from 'src/app/modules/teacher/components/tasks/tasks.component';
import { StudentDashboardService } from 'src/app/modules/shared/student-dashboard/student-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardInfo: any;

  previousContainer?: CdkDropList<Card[]>;
  previousIndex: number = -1;

  selectedCard!: any;

  @ViewChild('content') content!: ElementRef;
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(
    private modalService: NgbModal,
    private tasksSerices: TasksService,
    private dashboardService: StudentDashboardService
  ) {}

  ngOnInit(): void {
    this.onGetDashboardInfo();
    console.log(this.dashboardInfo);
  }

  onGetDashboardInfo() {
    this.dashboardService.getDashboardInformations().subscribe((response) => {
      this.dashboardInfo = response;
      console.log(this.dashboardInfo);
    });
  }

  subjects: Subjects[] = [];

  cardsToDo: Card[] = [
    { id: '5', title: 'Pro', description: 'wdwf', status: 'dwfw' },
  ];

  cardsInProgress: Card[] = [];

  cardsReview: Card[] = [];

  cardsDone: Card[] = [];

  tasks: Tasks[] = [];

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (event.container.data === this.cardsReview) {
      this.previousContainer = event.previousContainer; // Save the previous container
      this.previousIndex = event.previousIndex; // Save the previous index
      this.openModal(this.cardsReview);
    }
  }

  onModalClose() {
    if (this.previousContainer && this.previousIndex > -1) {
      transferArrayItem(
        this.cardsReview,
        this.previousContainer.data,
        this.cardsReview.length - 1,
        this.previousIndex
      );
    }
    this.previousContainer = undefined;
    this.previousIndex = -1;
  }

  openModal(card: any) {
    this.selectedCard = card;
    this.modalService.open(this.content, {
      centered: true,
    });
  }

  calculateHeight(cards: Card[]): number {
    const baseHeight = 220; // Minimum column height
    const itemHeight = 165; // Height per task
    return baseHeight + cards.length * itemHeight - 100;
  }
}
