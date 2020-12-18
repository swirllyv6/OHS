import { TestBed } from '@angular/core/testing';

import { CustomRepairService } from './custom-repair.service';

describe('CustomRepairService', () => {
  let service: CustomRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
