import { TestBed } from '@angular/core/testing';

import { WowConstantsService } from './wow-constants.service';

describe('WowConstantsService', () => {
  let service: WowConstantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WowConstantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
