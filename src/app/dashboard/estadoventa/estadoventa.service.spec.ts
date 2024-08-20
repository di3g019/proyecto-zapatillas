import { TestBed } from '@angular/core/testing';

import { EstadoventaService } from './estadoventa.service';

describe('EstadoventaService', () => {
  let service: EstadoventaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoventaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
