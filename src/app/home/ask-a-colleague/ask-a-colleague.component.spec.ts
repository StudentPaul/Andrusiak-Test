import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskAColleagueComponent } from './ask-a-colleague.component';

describe('AskAColleagueComponent', () => {
  let component: AskAColleagueComponent;
  let fixture: ComponentFixture<AskAColleagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskAColleagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskAColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
