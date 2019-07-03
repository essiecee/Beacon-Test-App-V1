import { TestBed } from '@angular/core/testing';

import { FrequencyTimerService } from './frequency-timer.service';

describe('FrequencyTimerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FrequencyTimerService = TestBed.get(FrequencyTimerService);
    expect(service).toBeTruthy();
  });
});
