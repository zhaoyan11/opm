import { TestBed } from '@angular/core/testing';

import { UserUrlService } from './user-url.service';

describe('UserUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserUrlService = TestBed.get(UserUrlService);
    expect(service).toBeTruthy();
  });
});
