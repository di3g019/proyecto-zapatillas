import { TestBed } from '@angular/core/testing';

import { TipodocumentocolaboradorService } from './tipodocumentocolaborador.service';

describe('TipodocumentocolaboradorService', () => {
  let service: TipodocumentocolaboradorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipodocumentocolaboradorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
