import {Injectable} from "@angular/core";
import {APIService} from "./api.service";
import {getUrlWithQueryParams} from "../utils/objects";
import {environment} from "../../environments/environment.development";
import {RealTimeWeather, WeatherForecast} from "../models/weather";


@Injectable({providedIn: 'root'})

export class WeatherService {

    constructor(private apiService: APIService) {}

    public getDailyWeatherForecast(lat: string, lng: string): Promise<any> {
        const url: string = getUrlWithQueryParams(
            `${environment.weatherApiRootUrl}/forecast`, {
                location: [lat, lng].join(','),
                timesteps: '1d',
                apikey: environment.weatherApiKey
            })
        return this.apiService
            .get(url)
            .then((e) => new WeatherForecast(e))
    }

    public getWeatherRealTime(lat: string, lng: string): Promise<any> {
        const url: string = getUrlWithQueryParams(
            `${environment.weatherApiRootUrl}/realtime`, {
                location: [lat, lng].join(','),
                apikey: environment.weatherApiKey
            })
        return this.apiService
            .get(url)
            .then((e) => new RealTimeWeather(e))
    }

}
