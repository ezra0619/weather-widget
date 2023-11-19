export class RealTimeWeather {
    data: {
        time: string,
        values: {
            cloudBase: number,
            cloudCeiling: null,
            cloudCover: number,
            dewPoint: number,
            freezingRainIntensity: number,
            humidity: number,
            precipitationProbability: number,
            pressureSurfaceLevel: number,
            rainIntensity: number,
            sleetIntensity: number,
            snowIntensity: number,
            temperature: number,
            temperatureApparent: number,
            uvHealthConcern: number,
            uvIndex: number,
            visibility: number,
            weatherCode: number,
            windDirection: number,
            windGust: number,
            windSpeed: number
        }
    };
    location: {
        lat: number,
        lon: number,
        name: string,
        type: string
    }

    constructor(data: Record<string, any> = {}) {
        this.data = data.data;
        this.location = data.location;
    }
}
