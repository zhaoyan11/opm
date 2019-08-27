import { TestBed } from '@angular/core/testing';

import { EnvHackService } from './env-hack.service';

describe('EnvHackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnvHackService = TestBed.get(EnvHackService);
    expect(service).toBeTruthy();
  });
});
