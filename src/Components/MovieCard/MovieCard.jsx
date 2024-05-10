import React, { useContext } from 'react'
import './MovieCardStyle.css';

import { useNavigate } from 'react-router-dom';
import { Context } from '../context/Context';
// import { Link } from 'react-router-dom';
import { Cards } from '../context/Context';

const MovieCard = ({movie}) => {
    const auth=Cards();
    const move=useNavigate();
    const {name, imdb_rating, genre, duration, img_link } = movie;

  return (
    <div className='card-container'>
        <div className='card-img-container'>
            <img className='card-img' src={img_link} alt="movie-card" />
        </div>
        <div className='middle'>
            <div className='txt'>
                {/* <a href='/viewmore'> */}
                    <button type='button' onClick={()=>{
                        auth.setdata(movie);
                        move("/viewmore");
                    }}>View More</button>
                {/* </a> */}
            </div>
        </div>
        <div className='card-details'>
            <div>
                <span className='title'>{name}</span>
            </div>
            <div>
                <span className='genre'><span style={{color:"red",fontWeight:"bold"}}>Genre: </span> {genre}</span>
            </div>
            <div className='rating'>
                <span><span style={{color:"red",fontWeight:"bold"}}>Rating: </span>{imdb_rating}</span>
                <span><span style={{color:"red", fontWeight:"bold"}}>Duration: </span>{duration} mins</span>
            </div>
        </div>
        
    </div>
  )
}

export default MovieCard