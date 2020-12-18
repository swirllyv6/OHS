import { TestBed } from '@angular/core/testing';

import { CleaningDetailingService } from './cleaning-detailing.service';

describe('CleaningDetailingService', () => {
  let service: CleaningDetailingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleaningDetailingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
