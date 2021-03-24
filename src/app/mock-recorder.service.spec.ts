import {TestBed} from '@angular/core/testing';

import {MockRecorderService} from './mock-recorder.service';

describe('MockRecorderService', () => {
  let service: MockRecorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRecorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
