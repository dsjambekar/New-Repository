import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPaperDetailComponent } from './question-paper-detail.component';

describe('QuestionPaperDetailComponent', () => {
  let component: QuestionPaperDetailComponent;
  let fixture: ComponentFixture<QuestionPaperDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionPaperDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPaperDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
