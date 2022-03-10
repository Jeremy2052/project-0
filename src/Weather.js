import React from 'react'
import { useState, useEffect } from 'react'
import CurrentWeather from './CurrentWeather';
import axios from 'axios';
import './Weather.css'

function Weather() {
  const [lat, setLat] = useState([]);
  const [lon, setlon] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setlon(position.coords.longitude);
      });

      // await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      //   .then(res => res.json())
      //   .then(result => {
      //     setCurrentData(result)
      //     console.log('today', result)
      //   });

      // const res = await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`);
      // const results = await res.json();
      // setCurrentData(results);
      // console.log('today', results)

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`);
      setCurrentData(response.data);
      // console.log('today response', response.data)
    }

    fetchData();
  }, [lat, lon]);

  // console.log('Latitude: ', lat);
  // console.log('Longitude: ', lon);

  return (
    <div className='weather'>
      {(typeof currentData.current != 'undefined') ?
        (<>
        <input className='weather__input' type="text" placeholder='Search city' />
          <CurrentWeather currentData={currentData} />
          {/* <HourlyWeather hourlyData={hourlyData} />
          <DailyWeather dailyData={dailyData} /> */}
        </>
        ) :
        (<div></div>)}
    </div>
  )
}

export default Weather
