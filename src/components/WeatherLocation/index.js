import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';
import {CLOUDY} from './../../constants/weathers'

const data = { 
  temperature: 12,
  weatherState: CLOUDY,
  humidity: 10,
  wind: '10 m/s'
}

const WeatherLocation = () => (
  <div className="weatherCont">
    <Location city={'Guadalajara'}></Location>
    <WeatherData data={data}></WeatherData>
  </div>
)

export default WeatherLocation;