import { TestBed } from '@angular/core/testing';

import { IsAdminGuard } from './is-admin.guard';
import { RouterTestingModule } from '@angular/router/testing'

describe('IsAdminGuard', () => {
  let guard: IsAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      teardown: { destroyAfterEach: false }
    });
    guard = TestBed.inject(IsAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
