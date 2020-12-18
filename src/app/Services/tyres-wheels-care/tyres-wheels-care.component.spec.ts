import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyresWheelsCareComponent } from './tyres-wheels-care.component';

describe('TyresWheelsCareComponent', () => {
  let component: TyresWheelsCareComponent;
  let fixture: ComponentFixture<TyresWheelsCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyresWheelsCareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyresWheelsCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
