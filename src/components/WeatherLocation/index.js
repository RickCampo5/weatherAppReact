import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import { PropTypes } from 'prop-types';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';
import Location from './Location';
import WeatherData from './WeatherData/index';
import './styles.css';

class WeatherLocation extends Component {

  constructor(props){
    super(props);
    const { city } = props;

    this.state = {
      city,
      data: null,
    };
  }

  componentDidMount() {
    this.handleUpdateClick();
  }
  
  componentDidUpdate(prevProps, prevState) {
  }
  
  handleUpdateClick = () => {
    const api_weather = getUrlWeatherByCity(this.state.city)

    fetch(api_weather)
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      const newWeather = transformWeather(data)
      this.setState({
        data: newWeather
      })
    });
  }
  render(){
    const { onWeatherLocationClick } = this.props
    const { city, data } = this.state
    return (
    <div className="weatherCont" onClick={onWeatherLocationClick}>
      <Location city={city}></Location>
      {data ? <WeatherData data={data}></WeatherData> : <CircularProgress size={50}></CircularProgress>}
    </div>)
  }
}
WeatherLocation.propTypes =  {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func,
}
export default WeatherLocation;