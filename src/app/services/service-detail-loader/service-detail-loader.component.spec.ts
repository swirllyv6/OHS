import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDetailLoaderComponent } from './service-detail-loader.component';

describe('ServiceDetailLoaderComponent', () => {
  let component: ServiceDetailLoaderComponent;
  let fixture: ComponentFixture<ServiceDetailLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDetailLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDetailLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
