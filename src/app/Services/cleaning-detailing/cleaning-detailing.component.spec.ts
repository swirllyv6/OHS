import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningDetailingComponent } from './cleaning-detailing.component';

describe('CleaningDetailingComponent', () => {
  let component: CleaningDetailingComponent;
  let fixture: ComponentFixture<CleaningDetailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningDetailingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningDetailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
