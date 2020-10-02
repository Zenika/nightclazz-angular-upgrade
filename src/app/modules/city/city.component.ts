import { Component, OnInit } from '@angular/core';
import { WeatherService } from "../../shared/services/weather.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { map, mergeMap, tap } from "rxjs/operators";
import { CitiesService } from "../../shared/services/cities.service";
import { DailyWeather } from "../../core/domain/daily-weather";
import { HourlyWeather } from "../../core/domain/hourly-weather";
import { UniteDegree } from "../../core/domain/unite-degree";
import { WeatherMode } from "../../core/domain/weather-mode";
import { GeoPosition } from "../../core/domain/geo-position";

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

    cityName$: Observable<string>;
    dailyWeather$: Observable<DailyWeather[]>;
    hourlyWeather$: Observable<HourlyWeather[]>;
    cityCoords$: Observable<GeoPosition>;
    degree: UniteDegree = 'C';
    mode: WeatherMode = "daily";
    loading = false

    constructor(protected weatherService: WeatherService, protected citiesService: CitiesService, protected route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.cityName$ = this.route.params.pipe(
            map(params => params.cityName)
        )
        this.cityCoords$ = this.cityName$.pipe(
            map(cityName => this.citiesService.getCityPosition(cityName))
        )
        this.dailyWeather$ = this.cityCoords$.pipe(
            tap(() => this.loading = true),
            mergeMap(coords => this.weatherService.getCityNextWeekWeather(coords.longitude, coords.latitude)),
            tap(() => this.loading = false),
        )
        this.hourlyWeather$ = this.cityCoords$.pipe(
            tap(() => this.loading = true),
            mergeMap(coords => this.weatherService.getCityDetailedWeather(coords.longitude, coords.latitude)),
            tap(() => this.loading = false),
        )
    }

    updateMode(mode: WeatherMode) {
        this.mode = mode
    }

    updateTemperatureUnite(degree: UniteDegree) {
        this.degree = degree
    }
}
