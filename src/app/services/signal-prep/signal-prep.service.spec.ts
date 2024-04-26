import { TestBed } from '@angular/core/testing';

import { SignalPrepService } from './signal-prep.service';

describe('SignalPrepService', () => {
  let service: SignalPrepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalPrepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
