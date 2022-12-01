import { TestBed } from '@angular/core/testing';

import { GarbageCollectorGuard } from './garbage-collector.guard';

describe('GarbageCollectorGuard', () => {
  let guard: GarbageCollectorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GarbageCollectorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
