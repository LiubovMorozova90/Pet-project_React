export type CityName = 'new york' | 'moscow' | 'washington';

export type DayWeather = {
  time: string;
  values: {
    sunriseTime: string;
    sunsetTime: string;
    temperatureAvg: number;
    windSpeedAvg: number;
  };
};

export type Timelines = {
  daily: DayWeather[];
};

export type Location = {
  name: string;
};

export type WeatherForecastType = {
  timelines: Timelines;
  location: Location;
};
