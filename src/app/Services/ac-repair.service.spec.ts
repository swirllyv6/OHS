import { TestBed } from '@angular/core/testing';

import { AcRepairService } from './ac-repair.service';

describe('AcRepairService', () => {
  let service: AcRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
