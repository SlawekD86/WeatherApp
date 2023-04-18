import React, { useCallback, useState } from 'react';
import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';

const WeatherBox = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = useCallback(async (city) => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0419fc997411a8778b33ff6570541877&units=metric`);
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const data = await response.json();
      const weatherData = {
        city: data.name,
        temp: data.main.temp,
        icon: data.weather[0].icon,
        description: data.weather[0].main
      };
      setWeatherData(weatherData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <section>
      <PickCity onSubmit={handleCityChange} />
      {weatherData && <WeatherSummary weatherData={weatherData} />}
      {isLoading && <Loader />}
    </section>
  );
};

export default WeatherBox;