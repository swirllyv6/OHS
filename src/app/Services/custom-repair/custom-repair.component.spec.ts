import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRepairComponent } from './custom-repair.component';

describe('CustomRepairComponent', () => {
  let component: CustomRepairComponent;
  let fixture: ComponentFixture<CustomRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRepairComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
