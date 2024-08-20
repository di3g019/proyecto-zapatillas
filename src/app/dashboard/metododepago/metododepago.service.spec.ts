import { TestBed } from '@angular/core/testing';

import { MetododepagoService } from './metododepago.service';

describe('MetododepagoService', () => {
  let service: MetododepagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetododepagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
