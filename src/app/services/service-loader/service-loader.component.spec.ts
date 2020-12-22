import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceLoaderComponent } from './service-loader.component';

describe('ServiceLoaderComponent', () => {
  let component: ServiceLoaderComponent;
  let fixture: ComponentFixture<ServiceLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
