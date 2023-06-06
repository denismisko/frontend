import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Card } from '../../students';
import {
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentDashboardService } from 'src/app/modules/shared/student-dashboard/student-dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashboardInfo: any;
  selectedSubjectTitle: string | null = null;

  previousContainer?: CdkDropList<Card[]>;
  previousIndex: number = -1;

  selectedCard!: any;
  taskToMove: any;
  taskOriginalStatus: any;

  statusMapping: { [key: string]: string } = {
    todo: '1',
    inProgress: '2',
    review: '3',
    done: '4',
  };

  @ViewChild('content') content!: ElementRef;
  @ViewChild('closeModal') closeModal!: ElementRef;

  constructor(
    private modalService: NgbModal,
    private dashboardService: StudentDashboardService
  ) {}

  ngOnInit(): void {
    this.onGetDashboardInfo();
  }

  onGetDashboardInfo() {
    this.dashboardService.getDashboardInformations().subscribe((response) => {
      this.dashboardInfo = response;
      console.log(this.dashboardInfo);
    });
  }

  drop(event: CdkDragDrop<Card[]>) {
    if (event.previousContainer === event.container) {
      // Handle reordering within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {

      // Save the task to move and its original status
      this.taskToMove = event.previousContainer.data[event.previousIndex];
      this.taskOriginalStatus = this.statusMapping[event.previousContainer.id];

      // Remove the task from the previous list
      event.previousContainer.data.splice(event.previousIndex, 1);

      // Add the task to the new list
      event.container.data.splice(event.currentIndex, 0, this.taskToMove);

      // If the task is moved to review, open the modal dialog
      if (event.container.id === 'review') {
        this.previousContainer = event.previousContainer; // Save the previous container
        this.previousIndex = event.previousIndex; // Save the previous index
        this.openModal(this.dashboardInfo?.review);
      } else {
        // If the task is moved to other states, update the task's status in the server
        this.updateTaskStatus(
          this.taskToMove.id,
          this.statusMapping[event.container.id]
        );
      }
    }
  }

  onModalClose() {
    if (this.previousContainer && this.previousIndex > -1) {
      // Move the task back to its original state in the UI
      const reviewIndex = this.dashboardInfo?.review.findIndex(
        (task: any) => task.id === this.taskToMove.id
      );
      if (reviewIndex > -1) {
        transferArrayItem(
          this.dashboardInfo?.review,
          this.previousContainer.data,
          reviewIndex,
          this.previousIndex
        );
      }
      // Update the task's status in the server
      this.updateTaskStatus(this.taskToMove.id, this.taskOriginalStatus);
      // Clear the saved previous container and index
      this.previousContainer = undefined;
      this.previousIndex = -1;
    }
  }

  onModalConfirm() {
    if (this.taskToMove) {
      // Update the task's status in the server
      this.updateTaskStatus(this.taskToMove.id, this.statusMapping['review']);

      // Clear the saved previous container and index
      this.previousContainer = undefined;
      this.previousIndex = -1;
    }
  }

  updateTaskStatus(taskId: string, status: string) {
    this.dashboardService.updateTaskStatus(taskId, status).subscribe(
      (response) => {
        if (this.selectedSubjectTitle) {
          this.fetchTasksForSubject(this.selectedSubjectTitle);
      }
      },
      (error) => {
        console.error('Error updating task status:', error);
      }
    );
  }

  openModal(card: any) {
    this.selectedCard = card;
    this.modalService.open(this.content, {
      centered: true,
    });
  }

  calculateHeight(dashboardInfo?: any): number {
    const baseHeight = 220; // Minimum column height
    const itemHeight = 165; // Height per task
    const length = dashboardInfo ? dashboardInfo.length : 0;
    return baseHeight + length * itemHeight - 100;
  }

  onSubjectClick(subjectTitle: string) {
    this.selectedSubjectTitle = subjectTitle;
    this.fetchTasksForSubject(subjectTitle);
  }

  fetchTasksForSubject(subjectTitle: string) {
    this.dashboardService
      .getDashboardInformationsBySubject(subjectTitle)
      .subscribe(
        (tasks) => {
          this.dashboardInfo = {
            ...this.dashboardInfo,
            todo: tasks.todo || [],
            inProgress: tasks.inProgress || [],
            review: tasks.review || [],
            done: tasks.done || [],
          };
        },
        (error) => {
          console.log('Error while fetching tasks: ', error);
        }
      );
  }
}
