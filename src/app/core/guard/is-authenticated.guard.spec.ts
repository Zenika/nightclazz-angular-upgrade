import { TestBed } from '@angular/core/testing';

import { isAuthenticatedGuard } from './is-authenticated.guard';
import { RouterTestingModule } from '@angular/router/testing'
import {CanActivateFn} from "@angular/router";

describe('IsAuthenticatedGuard', () => {
  let guard: CanActivateFn;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      teardown: { destroyAfterEach: false }
    });
    guard = TestBed.runInInjectionContext(() => isAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
