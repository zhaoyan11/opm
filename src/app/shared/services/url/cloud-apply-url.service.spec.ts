import { TestBed } from '@angular/core/testing';

import { CloudApplyUrlService } from './cloud-apply-url.service';

describe('CloudApplyUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudApplyUrlService = TestBed.get(CloudApplyUrlService);
    expect(service).toBeTruthy();
  });
});
