import React from 'react';
import { CityName, WeatherForecastType } from './types';

const fetchWeatherForecast = async (
  cityName: CityName
): Promise<WeatherForecastType | undefined> => {
  const options = { method: 'GET', headers: { accept: 'application/json' } };

  try {
    const response = await fetch(
      `https://api.tomorrow.io/v4/weather/forecast?timesteps=1d&location=${cityName}&apikey=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`,
      options
    );

    const data = (await response.json()) as WeatherForecastType;

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Пример вызова - fetchWeatherForecast('moscow')
// Не забудь что это асинхронная функция, она возвращает промиз

const WeatherForecast = () => {
  // тут будет логика получения погоды.
  // сначала нужно будет получить погоду в хуке useEffect
  // после положить полученные данные в стейт с помощью хука useState

  return (
    <div>
      <h1>Weather Forecast</h1>
    </div>
  );
};

export default WeatherForecast;
