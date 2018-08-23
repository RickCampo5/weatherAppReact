import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import Temperature from './Temperature';

const WeatherData = () => (
  <div>
    <WeatherExtraInfo humidity={80} wind={"10m/s"} ></WeatherExtraInfo>
    <Temperature></Temperature>
  </div>
)

export default WeatherData;