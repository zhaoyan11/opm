import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZhaoyansService {

  constructor() { }

  getName(): string {
    return 'zhaoyan';
  }
}
