import React, { useEffect } from 'react'
import axios from 'axios'

import './Movies.css'
import { useState } from 'react'
import Movie from './Movie'
// import {Link} from 'react-router-dom';

// const api_key = '59a58eb798a5f7bc86acb2722b473620'
const BASE_URL = 'https://api.themoviedb.org/3'

function Movies() {

  const [movieList, setMovieList] = useState([]);
  

  useEffect(() => {
    const api = axios.create({baseURL:BASE_URL});
    const getMovieData = async () =>{
      const response = await api.get('/trending/all/week?api_key=59a58eb798a5f7bc86acb2722b473620');
      // console.log(response.data.results)
      setMovieList(response.data.results);
    };

    getMovieData();
  },[])

  return (
    <div className='movies'>
      <div className="filter">
        <h5>Trending</h5>
        <h5>Popular</h5>
        <h5>Theater</h5>
        <h5>Genres</h5>
        <h5>Highest Rated</h5>
      </div>
      
      <div className="moviesList">
        {movieList.slice(0,19).map((movie) => {
          return <Movie key={movie.id} movie={movie}/>
        })}
      </div>
      

    </div>
  )
}

export default Movies
