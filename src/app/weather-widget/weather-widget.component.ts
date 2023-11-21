import { Component, Input, OnInit } from '@angular/core';
import { UserLocation } from '../models/userLocationData';
import { WeatherCodesDay, WeatherForecast } from '../models/weather';
import { LocationService } from '../services/location.service';
import { WeatherService } from '../services/weather.service';
import { isValueSet } from '../utils/values';

const LOCATION_SESSION_DATA_KEY = 'location-session-data';

export enum WidgetVariant {
	COMPACT = 'compact',
	SPACIOUS = 'spacious',
}

@Component({
	selector: 'andreea-weather-widget',
	templateUrl: './weather-widget.component.html',
	styleUrls: ['./weather-widget.component.scss'],
})
export class WeatherWidgetComponent implements OnInit {
	@Input() variant: WidgetVariant = WidgetVariant.COMPACT;
	public WidgetVariant = WidgetVariant;

	public userLocation: UserLocation;
	public dailyWeatherForecastPromise: Promise<Array<WeatherForecast>>;

	constructor(
		private locationService: LocationService,
		private weatherService: WeatherService,
	) {}

	public async ngOnInit(): Promise<void> {
		await this.setUserLocationData();
		this.setDailyWeatherForecast();
	}

	private async setUserLocationData(): Promise<void> {
		if (isValueSet(sessionStorage.getItem(LOCATION_SESSION_DATA_KEY))) {
			this.userLocation = JSON.parse(
				sessionStorage.getItem(LOCATION_SESSION_DATA_KEY) as string,
			) as UserLocation;
		} else {
			await this.setUpdatedUserLocation();
		}
	}

	private async setUpdatedUserLocation(): Promise<void> {
		this.userLocation = await this.getUserLocation();
		this.setSessionData(this.userLocation);
	}

	private async getUserLocation(): Promise<UserLocation> {
		return (await this.locationService.getLocationOfUser()).location;
	}

	private setSessionData(userLocationData: UserLocation): void {
		sessionStorage.setItem(
			LOCATION_SESSION_DATA_KEY,
			JSON.stringify({
				lat: userLocationData.lat,
				lng: userLocationData.lng,
				city: userLocationData.city,
			}),
		);
	}

	private setDailyWeatherForecast(): void {
		this.dailyWeatherForecastPromise = this.getDailyWeatherForecast(
			this.userLocation,
		);
	}

	private async getDailyWeatherForecast(
		userLocation: UserLocation,
	): Promise<Array<WeatherForecast>> {
		return this.weatherService.getDailyWeatherForecast(
			userLocation.lat,
			userLocation.lng,
		);
	}

	public async updateForecastBasedOnUpdatedUserLocation(): Promise<void> {
		await this.setUpdatedUserLocation();
		this.setDailyWeatherForecast();
	}

	public getFutureForecasts(
		allForecasts: Array<WeatherForecast>,
	): Array<WeatherForecast> {
		return allForecasts.slice(1);
	}

	public getDayOfWeekForDate(stringDate: string): string {
		const days: Array<string> = [
			'SUN',
			'MON',
			'TUE',
			'WED',
			'THU',
			'FRI',
			'SAT',
		];
		return days[new Date(stringDate).getDay()];
	}

	public getWeatherDescription(weatherCode: number): string {
		return WeatherCodesDay[weatherCode];
	}
}
