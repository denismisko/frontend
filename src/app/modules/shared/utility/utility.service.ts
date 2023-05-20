import { Injectable } from '@angular/core';
import { Tasks } from '../tasks/task';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  chunkArray<T>(array: T[], chunkSize: number): T[][] {
    return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
      array.slice(i * chunkSize, i * chunkSize + chunkSize)
    );
  }
}
