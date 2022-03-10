import React from 'react'
import { Link } from 'react-router-dom'
import './Movie.css'


function Movie({movie}) {
  return (
    //`/${movie.id}?${movie.title}`
    <Link to={{pathname: '/moviePicked',state:{movie}}} style={{ textDecoration: 'none', color:'white' }}>
      <div className='movie__list'>
        <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />

        <div className="movie_description">
          <h5>{movie.title || movie.original_title || movie.original_name}</h5>
          <h5>{movie.release_date || movie.first_air_date}</h5>
        </div>
      
    </div>
    </Link>
    
  )
}

export default Movie
