import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';
import { MessageService } from '../message.service';

@Injectable({
  providedIn: 'root',
})
export class CrisisService {

  constructor(private messageService: MessageService) { }

  getCrises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the crises
    this.messageService.add('crisisService: fetched crises');
    return of(CRISES);
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id))
    );
  }
}
