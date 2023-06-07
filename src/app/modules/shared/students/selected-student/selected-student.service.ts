import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedStudent {

  private studentUsernameSource = new BehaviorSubject<string>('');
  currentUsername = this.studentUsernameSource.asObservable();

  constructor() {}

  changeUsername(username: string) {
      this.studentUsernameSource.next(username);
  }
}
