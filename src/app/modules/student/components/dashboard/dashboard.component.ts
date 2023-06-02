import { Component } from '@angular/core';
import { Card, Subjects } from '../../students';
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
    { id: '1', title: 'Learn Angular', description: 'ahoj', status: '3' },
  ];

  cardsInProgress: Card[] = [
    { id: '1', title: 'Learn Angular', description: 'ahoj', status: '3' },
  ];

  cardsReview: Card[] = [
    { id: '1', title: 'Learn Angular', description: 'ahoj', status: '3' },
  ];

  cardsDone: Card[] = [
    { id: '1', title: 'Learn Angular', description: 'ahoj', status: '3' },
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

  calculateHeight(cards: Card[]): number {
    const baseHeight = 220; // Minimum column height
    const itemHeight = 165; // Height per task
    return baseHeight + cards.length * itemHeight - 100 ;
  }
}
