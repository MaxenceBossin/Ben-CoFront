import { TestBed } from '@angular/core/testing';

import { DeclarationService } from './declaration.service';

describe('DeclarationService', () => {
  let service: DeclarationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeclarationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
