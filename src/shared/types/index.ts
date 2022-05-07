export interface IConsolidatedWeather {
    air_pressure: number;
    applicable_date: string
    created: string
    humidity: number;
    id: number;
    max_temp: number;
    min_temp: number;
    predictability: number;
    the_temp: number;
    visibility: number;
    weather_state_abbr: string
    weather_state_name: string
    wind_direction: number;
    wind_direction_compass: string
    wind_speed: number;
}

export interface IWeather {
    consolidated_weather: IConsolidatedWeather[]
    latt_long: string;
    location_type: string;
    sun_rise: string;
    sun_set: string;
    time: string;
    timezone: string;
    timezone_name: string;
    title: string;
    woeid: number;

}

export interface IWatherSearch {
    latt_long: string;
    location_type: string;
    title: string;
    woeid: number;
}