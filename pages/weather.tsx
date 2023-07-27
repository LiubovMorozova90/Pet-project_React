import React, { useState } from 'react';
import WeatherForecast from 'components/WeatherForecast';

import styles from 'styles/Home.module.css';

export type CityName = 'new york' | 'moscow' | 'washington';

export default function Weather() {
  const [selectedCity, setSelectedCity] = useState('moscow');

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className={styles['weather-section']}>
      <div className={styles['weather-section_options']}>
        <p>Пожалуйста, выберите город</p>
        <select value={selectedCity} onChange={handleCityChange}>
          <option value="moscow">Москва</option>
          <option value="washington">Вашингтон</option>
          <option value="new york">Нью-Йорк</option>
        </select>
      </div>

      <WeatherForecast cityName={selectedCity as CityName} />
    </div>
  );
}
