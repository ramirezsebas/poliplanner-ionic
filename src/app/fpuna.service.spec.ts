import { TestBed } from '@angular/core/testing';

import { FpunaService } from './fpuna.service';

describe('FpunaService', () => {
  let service: FpunaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FpunaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
