import { TestBed } from '@angular/core/testing';

import { AcheterService } from './acheter.service';

describe('AcheterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcheterService = TestBed.get(AcheterService);
    expect(service).toBeTruthy();
  });
});
