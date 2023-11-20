import {Injectable} from "@angular/core";
import {APIService} from "./api.service";
import {getUrlWithQueryParams} from "../utils/objects";
import {environment} from "../../environments/environment.development";
import {WeatherForecast} from "../models/weather";


@Injectable({providedIn: 'root'})

export class WeatherService {

    constructor(private apiService: APIService) {}

    public getDailyWeatherForecast(lat: string, lng: string): Promise<Array<WeatherForecast>> {
        const body = {
            location: [lat, lng].join(','),
            fields: [
                "temperature",
                "weatherCodeDay",
	            "weatherCodeNight"
            ],
            units: "metric",
            timesteps: [
                "1d"
            ],
            startTime: "now",
            endTime: "nowPlus5d"
        }
        const url: string = getUrlWithQueryParams(
            `${environment.weatherApiRootUrl}/timelines`, {
                apikey: environment.weatherApiKey
            })
        return this.apiService
            .post(url, body)
            .then((res) =>  res.data.timelines[0].intervals.map((e: any) => new WeatherForecast(e)))

    }
}
