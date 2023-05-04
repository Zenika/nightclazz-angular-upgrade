import { TestBed } from '@angular/core/testing';

import { homeGuard } from './home.guard';
import {CanMatchFn} from "@angular/router";

describe('HomeGuard', () => {
  let guard: CanMatchFn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.runInInjectionContext(() => homeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
