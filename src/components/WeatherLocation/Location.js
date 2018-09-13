import React from 'react'
import PropTypes from 'prop-types'

const Location = ({city}) => <div className="locationCont"><h1>{city}</h1></div>
  //Destructuring 
  //normal const city = porps.city
  // const {city} = props; con esto debemos return ya que realizas mas acciones 
  // return <div><h1>{city}</h1></div>

Location.propTypes = {
  city: PropTypes.string.isRequired,
}

export default Location 