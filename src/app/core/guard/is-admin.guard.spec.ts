import { TestBed } from '@angular/core/testing';

import { isAdminGuard } from './is-admin.guard';
import { RouterTestingModule } from '@angular/router/testing'
import {CanActivateFn} from "@angular/router";

describe('IsAdminGuard', () => {
  let guard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      teardown: { destroyAfterEach: false }
    });
    guard = TestBed.runInInjectionContext(() => isAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
