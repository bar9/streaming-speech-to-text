import {TestBed} from '@angular/core/testing';

import {RevAiService} from './rev-ai.service';

describe('RevAiService', () => {
  let service: RevAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RevAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
