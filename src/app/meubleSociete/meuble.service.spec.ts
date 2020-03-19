import { TestBed } from '@angular/core/testing';

import { MeubleService } from './meuble.service';

describe('MeubleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeubleService = TestBed.get(MeubleService);
    expect(service).toBeTruthy();
  });
});
