import {Component, OnInit} from '@angular/core';
import {LocationService} from "../services/location.service";
import {WeatherService} from "../services/weather.service";
import {WeatherForecast} from "../models/weather";
import {isValueSet} from "../utils/values";
import { format } from 'date-fns';
import {UserLocation} from "../models/userLocationData";

const LOCATION_SESSION_DATA_KEY = 'location-session-data'

interface LocationSessionData {
    lat: string,
    lng: string,
    city: string
}

@Component({
    selector: 'andreea-weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
    public dailyWeatherForecastPromise: Promise<Array<WeatherForecast>>;
    public userLocation: LocationSessionData;

    constructor(private locationService: LocationService, private weatherService: WeatherService) {
    }

    public async ngOnInit(): Promise<void> {
        if (!isValueSet(sessionStorage.getItem(LOCATION_SESSION_DATA_KEY))) {
            await this.setSessionData();
        }
        this.userLocation = JSON.parse(sessionStorage.getItem(LOCATION_SESSION_DATA_KEY) as string) as LocationSessionData
        this.dailyWeatherForecastPromise = Promise.resolve(JSON.parse(sessionStorage.getItem('andreea') as string) as Array<WeatherForecast>)
        console.log((await this.dailyWeatherForecastPromise))
        // sessionStorage.setItem('andreea', JSON.stringify(await this.getDailyWeatherForecast()))
        // this.dailyWeatherForecastPromise =  this.getDailyWeatherForecast()
    }

    private async setSessionData(): Promise<void> {
        const userLocationData: UserLocation = (await this.locationService.getLocationOfUser()).location
        sessionStorage.setItem(LOCATION_SESSION_DATA_KEY, JSON.stringify({lat: userLocationData.lat.toString(), lng: userLocationData.lng.toString(), city: userLocationData.city}))
    }

    private async getDailyWeatherForecast(): Promise<Array<WeatherForecast>> {
        const userLocation: LocationSessionData = JSON.parse(sessionStorage.getItem(LOCATION_SESSION_DATA_KEY) as string)
        return this.weatherService.getDailyWeatherForecast(userLocation.lat, userLocation.lng)
    }

    public getFutureForecasts(allForecasts: Array<WeatherForecast>): Array<WeatherForecast> {
        return allForecasts.slice(1)
    }

    public getDayOfWeekForDate(stringDate: string): string {
        const days: Array<string> = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
        return days[new Date(stringDate).getDay()]
    }
}
