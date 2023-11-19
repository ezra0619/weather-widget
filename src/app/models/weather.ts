class DailyForecast {
    time: string;
    values: {
        cloudBaseAvg: number,
        cloudBaseMax: number,
        cloudBaseMin: number,
        cloudCeilingAvg: number,
        cloudCeilingMax: number,
        cloudCeilingMin: number,
        cloudCoverAvg: number,
        cloudCoverMax: number,
        cloudCoverMin: number,
        dewPointAvg: number,
        dewPointMax: number,
        dewPointMin: number,
        evapotranspirationAvg: number,
        evapotranspirationMax: number,
        evapotranspirationMin: number,
        evapotranspirationSum: number,
        freezingRainIntensityAvg: number,
        freezingRainIntensityMax: number,
        freezingRainIntensityMin: number,
        humidityAvg: number,
        humidityMax: number,
        humidityMin: number,
        iceAccumulationAvg: number,
        iceAccumulationLweAvg: number,
        iceAccumulationLweMax: number,
        iceAccumulationLweMin: number,
        iceAccumulationLweSum: number,
        iceAccumulationMax: number,
        iceAccumulationMin: number,
        iceAccumulationSum: number,
        moonriseTime: string,
        moonsetTime: string,
        precipitationProbabilityAvg: number,
        precipitationProbabilityMax: number,
        precipitationProbabilityMin: number,
        pressureSurfaceLevelAvg: number,
        pressureSurfaceLevelMax: number,
        pressureSurfaceLevelMin: number,
        rainAccumulationAvg: number,
        rainAccumulationLweAvg: number,
        rainAccumulationLweMax: number,
        rainAccumulationLweMin: number,
        rainAccumulationMax: number,
        rainAccumulationMin: number,
        rainAccumulationSum: number,
        rainIntensityAvg: number,
        rainIntensityMax: number,
        rainIntensityMin: number,
        sleetAccumulationAvg: number,
        sleetAccumulationLweAvg: number,
        sleetAccumulationLweMax: number,
        sleetAccumulationLweMin: number,
        sleetAccumulationLweSum: number,
        sleetAccumulationMax: number,
        sleetAccumulationMin: number,
        sleetIntensityAvg: number,
        sleetIntensityMax: number,
        sleetIntensityMin: number,
        snowAccumulationAvg: number,
        snowAccumulationLweAvg: number,
        snowAccumulationLweMax: number,
        snowAccumulationLweMin: number,
        snowAccumulationLweSum: number,
        snowAccumulationMax: number,
        snowAccumulationMin: number,
        snowAccumulationSum: number,
        snowDepthAvg: number,
        snowDepthMax: number,
        snowDepthMin: number,
        snowDepthSum: number,
        snowIntensityAvg: number,
        snowIntensityMax: number,
        snowIntensityMin: number,
        sunriseTime: string,
        sunsetTime: string,
        temperatureApparentAvg: number,
        temperatureApparentMax: number,
        temperatureApparentMin: number,
        temperatureAvg: number,
        temperatureMax: number,
        temperatureMin: number,
        uvHealthConcernAvg: number,
        uvHealthConcernMax: number,
        uvHealthConcernMin: number,
        uvIndexAvg: number,
        uvIndexMax: number,
        uvIndexMin: number,
        visibilityAvg: number,
        visibilityMax: number,
        visibilityMin: number,
        weatherCodeMax: number,
        weatherCodeMin: number,
        windDirectionAvg: number,
        windGustAvg: number,
        windGustMax: number,
        windGustMin: number,
        windSpeedAvg: number,
        windSpeedMax: number,
        windSpeedMin: number
    }

    constructor(data: Record<string, any> = {}) {
        this.time = data.time;
        this.values = data.values;
    }
}

class WeatherLocation {
    lat: number;
    lon: number;
    name: string;
    type: string;

    constructor(data: Record<string, any> = {}) {
        this.lat = data.lat;
        this.lon = data.lon;
        this.name = data.name;
        this.type = data.type;
    }
}

export class WeatherForecast {
    timelines: {
        daily: Array<DailyForecast>
    };
    location: WeatherLocation

    constructor(data: Record<string, any> = {}) {
        this.timelines = data.timelines;
        this.timelines.daily = this.timelines.daily.map((e: DailyForecast) => new DailyForecast(e))
        this.location = data.location;
    }
}

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

