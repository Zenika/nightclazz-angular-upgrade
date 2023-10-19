import {Component, computed, Input, OnInit, signal, Signal, WritableSignal} from '@angular/core';
import { WeatherService } from "../../shared/services/weather.service";
import { RouterLink } from "@angular/router";
import { CitiesService } from "../../shared/services/cities.service";
import { DailyWeather } from "../../core/domain/daily-weather";
import { HourlyWeather } from "../../core/domain/hourly-weather";
import { UniteDegree } from "../../core/domain/unite-degree";
import { WeatherMode } from "../../core/domain/weather-mode";
import { GeoPosition } from "../../core/domain/geo-position";
import { DegreePipe } from '../../shared/pipes/degree.pipe';
import { LMapComponent } from '../../shared/components/lmap/lmap.component';
import {NgIf, NgFor, AsyncPipe, NgOptimizedImage} from '@angular/common';

@Component({
    selector: 'app-city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.scss'],
    standalone: true,
  imports: [NgIf, LMapComponent, NgFor, RouterLink, AsyncPipe, DegreePipe, NgOptimizedImage]
})
export class CityComponent implements OnInit {
    //Router Input
    @Input() cityName!: string;

    dailyWeather: WritableSignal<DailyWeather[]> = signal([]);
    hourlyWeather: WritableSignal<HourlyWeather[]> = signal([]);
    cityCoords!: Signal<GeoPosition>;
    degree: UniteDegree = 'C';
    mode: WeatherMode = "daily";
    loading = false

    constructor(
      protected weatherService: WeatherService,
      protected citiesService: CitiesService,
    ) {
    }


    ngOnInit(): void {
      this.cityCoords = computed(() => this.citiesService.getCityPosition(this.cityName) ?? {} as GeoPosition);

      this.updateMode('daily');
    }

    updateMode(mode: WeatherMode) {
      this.mode = mode
      this.loading = true;

      if (mode === 'daily') {
        this.weatherService.getCityNextWeekWeather(this.cityCoords().longitude, this.cityCoords().latitude)
          .subscribe((res: DailyWeather[])=> {
            this.dailyWeather.set(res);
            this.loading = false;
          })

      } else if (mode === 'hourly') {
        this.weatherService.getCityDetailedWeather(this.cityCoords().longitude, this.cityCoords().latitude)
          .subscribe((res: HourlyWeather[])=> {
            this.hourlyWeather.set(res);
            this.loading = false;
          })
      }
    }

    updateTemperatureUnite(degree: UniteDegree) {
        this.degree = degree
    }
}
