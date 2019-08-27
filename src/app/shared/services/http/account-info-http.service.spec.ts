import { TestBed } from '@angular/core/testing';

import { AccountInfoHttpService } from './account-info-http.service';

describe('AccountInfoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountInfoHttpService = TestBed.get(AccountInfoHttpService);
    expect(service).toBeTruthy();
  });
});
