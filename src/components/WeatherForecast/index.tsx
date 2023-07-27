import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { CityName, WeatherForecastType } from './types';
import style from './WeatherForecast.module.css';

type WeatherForecastProps = {
  cityName: CityName;
};

const getWeatherForecast = async (cityName: CityName) => {
  const options = {
    method: 'GET',
    headers: { accept: 'application/json' },
  };

  const response = await fetch(
    `https://api.tomorrow.io/v4/weather/forecast?timesteps=1d&location=${cityName}&apikey=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
    options
  );
  const data = (await response.json()) as WeatherForecastType;
  return data;
};

const WeatherForecast = ({ cityName }: WeatherForecastProps) => {
  const {
    data: weatherData,
    isLoading,
    isError,
  } = useQuery<WeatherForecastType>(
    ['weatherForecast', cityName],
    () => getWeatherForecast(cityName),

    {
      retry: 3,
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return <p>Идет загрузка данных...</p>;
  }

  if (isError) {
    return <p>Ошибка получения данных...</p>;
  }
  return (
    <div>
      {weatherData ? (
        <div className={style['weather-list']}>
          <h2 className={style['weather-item']}>
            Город: {weatherData?.location?.name}
          </h2>
          {weatherData?.timelines?.daily.map((day) => (
            <div key={day.time}>
              <p className={style['weather-item']}>
                Дата: {day.time.split('T')[0]}
              </p>
              <p className={style['weather-item']}>
                Температура: {day.values?.temperatureAvg}
              </p>
              <p className={style['weather-item']}>
                Средняя скорость ветра: {day.values?.windSpeedAvg}
              </p>
              <p className={style['weather-item']}>
                Время восхода: {day.values?.sunriseTime}
              </p>
              <p className={style['weather-item']}>
                Время заката: {day.values?.sunsetTime}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>Идет загрузка данных...</p>
      )}
    </div>
  );
};

export default WeatherForecast;
