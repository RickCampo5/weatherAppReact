import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import Temperature from '../Temperature';
import {CLOUDY} from '../../constants/weathers'

const WeatherData = () => (
  <div>
    <WeatherExtraInfo humidity={80} wind={"10m/s"} ></WeatherExtraInfo>
    <Temperature temperature={25} weatherState={CLOUDY}></Temperature>
  </div>
)

export default WeatherData;