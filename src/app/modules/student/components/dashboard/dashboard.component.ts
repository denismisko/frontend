import { Component } from '@angular/core';
import { Card, Subjects } from '../../student.model';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  subjects: Subjects[] = [
    { subject: 'Pro' },
    { subject: 'Pro' },
    { subject: 'Pro' },
    { subject: 'Pro' },
    { subject: 'Pro' },
    { subject: 'Pro' },
    { subject: 'Pro' },
    { subject: 'Pro' },
  ];

  cardsToDo: Card[] = [
    { image: 'image-url-1', title: 'TO-DO', description: 'Description 1' },
    { image: 'image-url-2', title: 'TO-DO', description: 'Description 2' },
    { image: 'image-url-3', title: 'TO-DO', description: 'Description 3' },
    { image: 'image-url-3', title: 'TO-DO', description: 'Description 3' },
  ];

  cardsInProgress: Card[] = [
    {
      image: 'image-url-1',
      title: 'IN PROGRESS',
      description: 'Description 1',
    },
    {
      image: 'image-url-2',
      title: 'IN PROGRESS',
      description: 'Description 2',
    },
    {
      image: 'image-url-3',
      title: 'IN PROGRESS',
      description: 'Description 3',
    },
    { image: 'image-url-3', title: 'TO-DO', description: 'Description 3' },
  ];

  cardsReview: Card[] = [
    { image: 'image-url-1', title: 'REVIEW', description: 'Description 1' },
    { image: 'image-url-2', title: 'REVIEW', description: 'Description 2' },
    { image: 'image-url-3', title: 'REVIEW', description: 'Description 3' },
    { image: 'image-url-3', title: 'TO-DO', description: 'Description 3' },
  ];

  cardsDone: Card[] = [
    { image: 'image-url-1', title: 'DONE', description: 'Description 1' },
    { image: 'image-url-2', title: 'DONE', description: 'Description 2' },
    { image: 'image-url-3', title: 'DONE', description: 'Description 3' },
    { image: 'image-url-3', title: 'TO-DO', description: 'Description 3' },
  ];

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
  }
}
