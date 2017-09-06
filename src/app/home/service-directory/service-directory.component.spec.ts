import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDirectoryComponent } from './service-directory.component';

describe('ServiceDirectoryComponent', () => {
  let component: ServiceDirectoryComponent;
  let fixture: ComponentFixture<ServiceDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
