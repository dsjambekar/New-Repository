import { TestBed } from '@angular/core/testing';

import { QuestionPaperService } from './question-paper.service';

describe('QuestionPaperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestionPaperService = TestBed.get(QuestionPaperService);
    expect(service).toBeTruthy();
  });
});
