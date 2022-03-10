import React from 'react'
import './CurrentWeather.css'
import moment from 'moment'
import HourlyWeather from './HourlyWeather';
import DailyWeather from './DailyWeather';

function CurrentWeather({ currentData }) {
  const date = moment().format('MMMM Do YYYY');
  return (
    <div className='currentWeather'>
      <div className="currentContainer">
        <div className="weather__header">
          <h4>Today {date}</h4>
          {/* <h5>{currentData.name}, {currentData.sys.country}</h5> */}
        </div>

        <div className="weather__body">
          <p>Temperature: {currentData.current.temp} &deg;C</p>
          <p>Feels like: {currentData.current.feels_like} &deg;C</p>
          <p>Humidty: {currentData.current.humidity}%</p>
          <p>Description: {currentData.current.weather[0].description}</p>
          <p>Wind: {currentData.current.wind_speed} mph</p>
        </div>

      </div>

      <div className="hourly">
        {/* <div className="weather__header">
          <h4>Hourly</h4>
        </div> */}
        {currentData.hourly.slice(0, 12).map((hour, i) => {
          return <HourlyWeather key={i} hour={i} temp={hour.temp} feels_like={hour.feels_like} description={hour.weather[0].description} wind_speed={hour.wind_speed} humidity={hour.humidity} />

        })}
      </div>

      <div className="daily">
        {currentData.daily.slice(0, 7).map((day, i) => {
          return (<DailyWeather key={i} id={i} temp_day={day.temp.day} temp_morn={day.temp.morn} temp_night={day.temp.night} humidity={day.humidity} wind_speed={day.wind_speed} />)
        })}
      </div>

    </div>
  )
}

export default CurrentWeather
