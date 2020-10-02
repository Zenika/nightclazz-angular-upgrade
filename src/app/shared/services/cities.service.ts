import { Injectable } from '@angular/core';
import { City } from '../../core/domain/city';
import { GeoPosition } from '../../core/domain/geo-position';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private cities: City[] = [
    {name: "GRENOBLE", position: new GeoPosition(45.183916, 5.703630)},
    {name: "SINGAPOUR", position: new GeoPosition(1.295600, 103.858995)},
    {name: "BORDEAUX", position: new GeoPosition(44.848089, -0.571017)},
    {name: "BREST", position: new GeoPosition(48.389397, -4.499237)},
    {name: "MONTREAL", position: new GeoPosition(45.523000, -73.581700)},
    {name: "LYON", position: new GeoPosition(45.767443, 4.858798)},
    {name: "RENNES", position: new GeoPosition(48.113409, -1.661249)},
    {name: "NANTES", position: new GeoPosition(47.207408, -1.556187)},
    {name: "LILLE", position: new GeoPosition(50.648670, 3.075520)},
    {name: "PARIS", position: new GeoPosition(48.878932, 2.328487)}
  ]


  getCities(): City[] {
    return this.cities
  }


  getCityPosition(cityName): GeoPosition {
    return this.cities.find(c => c.name === cityName).position
  }

  addCity(city: City) {
    this.cities.push(city)
  }
}
