import { UniteDegree } from './unite-degree'
import { WeatherState } from './weather-state'

export interface DailyWeather {
    type: 'daily';
    day: string
    weather: WeatherState
    temperatureMax: number
    temperatureMin: number
    unite: UniteDegree
}
