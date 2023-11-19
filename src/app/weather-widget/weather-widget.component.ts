import {Component, OnInit} from '@angular/core';
import {LocationService} from "../services/location.service";
import {isValueSet} from "../utils/values";
import {WeatherService} from "../services/weather.service";

const LOCATION_SESSION_DATA_KEY = 'location-session-data'
interface LocationSessionData {
    lat: string,
    lng: string
}

@Component({
    selector: 'andreea-weather-widget',
    templateUrl: './weather-widget.component.html',
    styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit{

    constructor(private locationService: LocationService, private weatherService: WeatherService) {}

    public async ngOnInit(): Promise<void> {
        if(!isValueSet(sessionStorage.getItem(LOCATION_SESSION_DATA_KEY))) {
           await this.setSessionData();
        }
        await this.getWeatherRealTime()
    }

    private async setSessionData(): Promise<void> {
        const userLocationData = (await this.locationService.getLocationOfUser()).location
        sessionStorage.setItem(LOCATION_SESSION_DATA_KEY, JSON.stringify({lat: userLocationData.lat.toString(), lng: userLocationData.lng.toString()}))
    }

    private async getWeatherRealTime(): Promise<void> {
        const userLocation: LocationSessionData = JSON.parse(sessionStorage.getItem(LOCATION_SESSION_DATA_KEY) as string)
        // const weatherForecast = await this.weatherService.getDailyWeatherForecast(userLocation.lat, userLocation.lng)
        // console.log(weatherForecast)
    }
}
