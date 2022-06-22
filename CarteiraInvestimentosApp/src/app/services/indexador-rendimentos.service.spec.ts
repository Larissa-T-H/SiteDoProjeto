import { TestBed } from '@angular/core/testing';

import { IndexadorRendimentosService } from './indexador-rendimentos.service';

describe('IndexadorRendimentosService', () => {
  let service: IndexadorRendimentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexadorRendimentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
