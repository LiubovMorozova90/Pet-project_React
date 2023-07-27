import React, { useState } from 'react';
import WeatherForecast from 'components/WeatherForecast';

import styles from 'styles/Home.module.css';
import { CityName } from 'components/WeatherForecast/types';

type CitySelectOption = {
  value: CityName;
  label: string;
};

const CITY_SELECT_OPTIONS: CitySelectOption[] = [
  { label: 'Москва', value: 'moscow' },
  { label: 'Вашингтон', value: 'washington' },
  { label: 'Нью-Йорк', value: 'new york' },
];

export default function Weather() {
  const [selectedCity, setSelectedCity] = useState<CityName>('moscow');

  const handleCityChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSelectedCity(e.target.value as CityName);
  };

  return (
    <div className={styles['weather-section']}>
      <div className={styles['weather-section_options']}>
        <p>Пожалуйста, выберите город</p>
        <select value={selectedCity} onChange={handleCityChange}>
          {CITY_SELECT_OPTIONS.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>

      <WeatherForecast cityName={selectedCity} />
    </div>
  );
}
