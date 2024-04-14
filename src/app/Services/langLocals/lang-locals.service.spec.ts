import { TestBed } from '@angular/core/testing';

import { LangLocalsService } from './lang-locals.service';

describe('LangLocalsService', () => {
  let service: LangLocalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangLocalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
