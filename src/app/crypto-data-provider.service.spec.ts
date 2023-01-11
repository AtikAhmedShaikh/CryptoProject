import { TestBed } from '@angular/core/testing';

import { CryptoDataProviderService } from './crypto-data-provider.service';

describe('CryptoDataProviderService', () => {
  let service: CryptoDataProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoDataProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
