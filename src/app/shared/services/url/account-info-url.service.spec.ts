import { TestBed } from '@angular/core/testing';

import { AccountInfoUrlService } from './account-info-url.service';

describe('AccountInfoUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountInfoUrlService = TestBed.get(AccountInfoUrlService);
    expect(service).toBeTruthy();
  });
});
