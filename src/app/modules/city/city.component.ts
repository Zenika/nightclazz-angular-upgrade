import { Component, DestroyRef, inject, OnInit } from '@angular/core'
import { WeatherService } from "../../shared/services/weather.service";
import { Observable, Subscription } from 'rxjs'
import { ActivatedRoute, RouterLink } from "@angular/router";
import { filter, map, mergeMap, tap } from 'rxjs/operators'
import { CitiesService } from "../../shared/services/cities.service";
import { DailyWeather } from "../../core/domain/daily-weather";
import { HourlyWeather } from "../../core/domain/hourly-weather";
import { UniteDegree } from "../../core/domain/unite-degree";
import { WeatherMode } from "../../core/domain/weather-mode";
import { GeoPosition } from "../../core/domain/geo-position";
import { DegreePipe } from '../../shared/pipes/degree.pipe';
import { LMapComponent } from '../../shared/components/lmap/lmap.component';
import { NgIf, NgFor, NgOptimizedImage, AsyncPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss'],
    standalone: true,
    imports: [NgIf, LMapComponent, NgFor, NgOptimizedImage, RouterLink, AsyncPipe, DegreePipe]
})
export class CityComponent implements OnInit {

    cityName$!: Observable<string>;
    dailyWeather!: DailyWeather[];
    hourlyWeather$!: Observable<HourlyWeather[]>;
    cityCoords$!: Observable<GeoPosition>;
    degree: UniteDegree = 'C';
    mode: WeatherMode = "daily";
    loading = false
    private destroyRef = inject(DestroyRef)

    constructor(protected weatherService: WeatherService, protected citiesService: CitiesService, protected route: ActivatedRoute) {
    }


    ngOnInit(): void {
        this.cityName$ = this.route.params.pipe(
            map(params => params.cityName)
        )
        this.cityCoords$ = this.cityName$.pipe(
            map(cityName => this.citiesService.getCityPosition(cityName)),
            filter((value: GeoPosition | undefined): value is GeoPosition => value !== undefined),
        )
        this.cityCoords$.pipe(
            filter(coords => coords !== undefined),
            tap(() => this.loading = true),
            mergeMap(coords => this.weatherService.getCityNextWeekWeather(coords.longitude, coords.latitude)),
            tap(() => this.loading = false),
            takeUntilDestroyed(this.destroyRef)
        ).subscribe({
          next: (dailyWeather) => this.dailyWeather = dailyWeather,
        })
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
