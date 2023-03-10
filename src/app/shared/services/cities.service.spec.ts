import { TestBed } from '@angular/core/testing';

import { CitiesService } from './cities.service';
import { GeoPosition } from "../../core/domain/geo-position";

describe('CitiesService', () => {
  let service: CitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ teardown: { destroyAfterEach: false } });
    service = TestBed.inject(CitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get cities', () => {
    expect(service.getCities().length).toBe(10);
  });

  it('should get city by name', () => {
    const cityName = "GRENOBLE";
    expect(service.getCityPosition(cityName)).toEqual(new GeoPosition(45.183916, 5.703630));
  });
});
