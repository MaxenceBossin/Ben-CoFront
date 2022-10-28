import { TestBed } from '@angular/core/testing';

import { DumpsterService } from './dumpster.service';

describe('DumpsterService', () => {
  let service: DumpsterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DumpsterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
