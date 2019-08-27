import { TestBed } from '@angular/core/testing';

import { CloudApplyHttpService } from './cloud-apply-http.service';

describe('CloudApplyHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CloudApplyHttpService = TestBed.get(CloudApplyHttpService);
    expect(service).toBeTruthy();
  });
});
