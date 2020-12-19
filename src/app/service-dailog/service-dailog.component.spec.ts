import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDailogComponent } from './service-dailog.component';

describe('ServiceDailogComponent', () => {
  let component: ServiceDailogComponent;
  let fixture: ComponentFixture<ServiceDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
