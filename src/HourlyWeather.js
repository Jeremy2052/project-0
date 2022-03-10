import React from 'react'
import './HourlyWeather.css'

function HourlyWeather({ hour, temp, feels_like, description, wind_speed, humidity }) {
  return (
    <div className='hourlyWeather'>
      <p>Hour: {hour}</p>
      <p>Temperature: {temp} &deg;C</p>
      <p>Feels like: {feels_like} &deg;C</p>
      <p>Description: {description}</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind: {wind_speed} mph</p>
    </div>
  )
}

export default HourlyWeather
