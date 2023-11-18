import {Component, OnInit} from '@angular/core';
import {LocationService} from "../services/location.service";
import {isValueSet} from "../utils/values";

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

    constructor(private locationService: LocationService) {}


    public async ngOnInit(): Promise<void> {
        if(isValueSet(sessionStorage.getItem(LOCATION_SESSION_DATA_KEY))) {
            console.log('we have session data')
        } else {
            console.log('we are setting new Session Data')
            const userLocationData = (await this.locationService.getLocationOfUser()).location
            sessionStorage.setItem(LOCATION_SESSION_DATA_KEY, JSON.stringify({lat: userLocationData.lat.toString(), lng: userLocationData.lng.toString()}))
        }
    }
}
