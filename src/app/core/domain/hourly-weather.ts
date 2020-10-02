import { UniteDegree } from './unite-degree'
import { WeatherState } from './weather-state'

export interface HourlyWeather {
    type: 'hourly';
    time: string;
    temperature: number;
    weather: WeatherState,
    unite: UniteDegree
}
