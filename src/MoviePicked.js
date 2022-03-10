import React, { useEffect } from 'react';
import { useLocation} from 'react-router-dom';
import './MoviePicked.css';
import movieTrailer from 'movie-trailer';
// import YouTube from 'react-youtube';
import { useState } from 'react';
import ReactPlayer from 'react-player/youtube'

function MoviePicked() {
  // const {testValue} = useParams();
  const [trailer,setTrailer] = useState(null)
  const {state} = useLocation();
  // console.log(state);


  useEffect(()=>{
      movieTrailer(null,{tmdbId: state.movie.id})
      .then(response => {
        setTrailer(response)
        // console.log('response', response )
      });
    
  },[state.movie.id])
  
  return (
    <div className='moviePicked'>
      <div className="movie__poster">
        <img src={`https://image.tmdb.org/t/p/original/${state?.movie?.backdrop_path}`} alt="" />
      </div>
      
      <div className="movie__description">
        <h1>{state.movie.title}</h1>
        <h2>Release Date: {state.movie.release_date}</h2>
        <h5>{state.movie.overview}</h5>
      </div>
      <ReactPlayer  url={trailer} width='100%' height='50vh' controls={true}/>
      
    </div>
  )
}

export default MoviePicked
