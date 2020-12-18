import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcRepairComponent } from './ac-repair.component';

describe('AcRepairComponent', () => {
  let component: AcRepairComponent;
  let fixture: ComponentFixture<AcRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
