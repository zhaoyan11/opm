import { TestBed } from '@angular/core/testing';

import { ZhaoyansService } from './zhaoyans.service';

describe('ZhaoyansService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZhaoyansService = TestBed.get(ZhaoyansService);
    expect(service).toBeTruthy();
  });
});
