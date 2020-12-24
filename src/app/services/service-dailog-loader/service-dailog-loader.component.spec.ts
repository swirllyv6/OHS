import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDailogLoaderComponent } from './service-dailog-loader.component';

describe('ServiceDailogLoaderComponent', () => {
  let component: ServiceDailogLoaderComponent;
  let fixture: ComponentFixture<ServiceDailogLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDailogLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDailogLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
