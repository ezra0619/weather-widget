import {Injectable} from "@angular/core";
import {APIService} from "./api.service";
import {UserLocation} from "../models/userLocation";
import {getUrlWithQueryParams} from "../utils/objects";
import {environment} from "../../environments/environment.development";
import {RealTimeWeather} from "../models/weather";


@Injectable({providedIn: 'root'})

export class WeatherService {

    constructor(private apiService: APIService) {}

    public getWeatherRealTime(lat: string, lng: string): Promise<any> {
        const url: string = getUrlWithQueryParams(
            environment.weatherApiRootUrl, {
                location: [lat, lng].join(','),
                apikey: environment.weatherApiKey
            })
        return this.apiService
            .get(url)
            .then((e) => new RealTimeWeather(e))
    }
}
