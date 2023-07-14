import React, { useState, useEffect } from 'react';
import { CityName, WeatherForecastType } from './types';
import style from './WeatherForecast.module.css';

type WeatherForecastProps = {
  cityName: CityName;
};

const WeatherForecast = ({ cityName }: WeatherForecastProps) => {
  const [weatherData, setWeatherData] = useState<
    WeatherForecastType | undefined
  >(undefined);

  useEffect(() => {
    const fetchWeatherForecast = async () => {
      const options = {
        method: 'GET',
        headers: { accept: 'application/json' },
      };

      try {
        const response = await fetch(
          `https://api.tomorrow.io/v4/weather/forecast?timesteps=1d&location=${cityName}&apikey=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
          options
        );

        const data = (await response.json()) as WeatherForecastType;

        console.log('API Response:', data);

        setWeatherData(data);
      } catch (error) {
        console.log('API Error:', error);
      }
    };

    fetchWeatherForecast();
  }, [cityName]);

  return (
    <div>
      {weatherData ? (
        <div className={style['weather-list']}>
          <h2 className={style['weather-item']}>
            Город: {weatherData?.location?.name}
          </h2>
          <p className={style['weather-item']}>
            Температура:{' '}
            {weatherData?.timelines?.daily[0]?.values?.temperatureAvg}
          </p>
          <p className={style['weather-item']}>
            Средняя скорость ветра:{' '}
            {weatherData?.timelines?.daily[0]?.values?.windSpeedAvg}
          </p>
          <p className={style['weather-item']}>
            Время восхода:{' '}
            {weatherData?.timelines?.daily[0]?.values?.sunriseTime}
          </p>
          <p className={style['weather-item']}>
            Время заката: {weatherData?.timelines?.daily[0]?.values?.sunsetTime}
          </p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default WeatherForecast;
