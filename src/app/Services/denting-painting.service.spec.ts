import { TestBed } from '@angular/core/testing';

import { DentingPaintingService } from './denting-painting.service';

describe('DentingPaintingService', () => {
  let service: DentingPaintingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DentingPaintingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
