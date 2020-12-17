import { TestBed } from '@angular/core/testing';

import { TyresWheelsCareService } from './tyres-wheels-care.service';

describe('TyresWheelsCareService', () => {
  let service: TyresWheelsCareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TyresWheelsCareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
