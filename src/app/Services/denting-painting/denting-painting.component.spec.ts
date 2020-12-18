import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentingPaintingComponent } from './denting-painting.component';

describe('DentingPaintingComponent', () => {
  let component: DentingPaintingComponent;
  let fixture: ComponentFixture<DentingPaintingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentingPaintingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DentingPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
