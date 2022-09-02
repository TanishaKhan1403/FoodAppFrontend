import { TestBed } from '@angular/core/testing';

import { BranchmanagerGuardGuard } from './branchmanager-guard.guard';

describe('BranchmanagerGuardGuard', () => {
  let guard: BranchmanagerGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(BranchmanagerGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
