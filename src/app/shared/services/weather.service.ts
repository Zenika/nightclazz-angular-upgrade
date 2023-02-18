import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { DailyWeather7Timer, HourlyWeather7Timer, WeatherMapper } from "./weather.mapper";
import { HourlyWeather } from "../../core/domain/hourly-weather";
import { DailyWeather } from "../../core/domain/daily-weather";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    constructor(protected http: HttpClient) {
    }

    getCityNextWeekWeather(long: number, lat: number): Observable<DailyWeather[]> {
        return this.http.get<DailyWeather7Timer>(
          `http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civillight&output=json`
        ).pipe(
            map(response => WeatherMapper.toDailyDomain(response))
        )
    }

    getCityDetailedWeather(long: number, lat: number): Observable<HourlyWeather[]> {
        return this.http.get<HourlyWeather7Timer>(
          `http://www.7timer.info/bin/api.pl?lon=${long}&lat=${lat}&product=civil&output=json`
        ).pipe(
            map(response => WeatherMapper.toHourlyDomain(response))
        )
    }
}
