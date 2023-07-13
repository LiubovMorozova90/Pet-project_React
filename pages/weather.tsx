import WeatherForecast from 'components/WeatherForecast';

export default function Weather() {
  return (
    <>
      <WeatherForecast cityName='moscow'/>
      <WeatherForecast cityName='washington'/>
      <WeatherForecast cityName='new york'/>
    </>);
}
