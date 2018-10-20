import React, { Component } from 'react'
import PropTypes from 'prop-types'
import transformForecast from '../services/transformForecast'
import ForecastItem from './ForecastItem'
import { url_base_forecast, api_key } from '../constants/api_url'

class ForecastExtended extends Component {

  constructor(){
    super();
    this.state = { forecastData: null }
  }

  componentDidMount(){
    this.updateCity(this.props.city);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps !== this.props.city){
      this.setState({ forecastData: null });
      this.updateCity(nextProps.city);
    }
  }

  updateCity = city => {
    const url_forecast  = `${url_base_forecast}?q=${city}&appid=${api_key}&units=metric`;

    fetch(url_forecast)
    .then(data =>
      (data.json())
    )
    .then(weather_data =>{
      console.log(weather_data)
      const forecastData = transformForecast(weather_data)
      console.log(forecastData)
      this.setState({ forecastData })
    })
  }

  renderForecastItemsDays(forecastData){
    return forecastData.map( forecast => 
      <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay={forecast.weekDay} hour={forecast.hour} data={forecast.data}></ForecastItem>) 
  }

  renderProgress(){
    return <h3>"Cargando Pronóstico Extendido..."</h3>;
  }

  render(){
    const { city } = this.props;
    const { forecastData } = this.state;
    return (
      <div>
        <h2 className="forecastTitle">Pronostio Extendido para {city}</h2>
        {forecastData ? 
        this.renderForecastItemsDays(forecastData) : 
        this.renderProgress()}
      </div>
    )
  }
}

ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
} 

export default ForecastExtended