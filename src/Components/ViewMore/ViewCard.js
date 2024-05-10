import React from 'react';
import './ViewMoreStyle.css';
import Navbar from '../NavBar';
import BackImg from "../ViewMore/viewpage.jpg";
import ImdbImg from '../ViewMore/imdb.png';



const ViewCard = ({movie}) => {
    const {name, imdb_rating, genre, duration, img_link, year, certificate, imbd_votes, cast_name, director_name, writter_name } = movie;
    
  return (

    <div className='view-container'> 
        <div className='view-img-container'>
            <img className='view-img' src={img_link} alt="view-card" />
        </div>
        <div className='view-details'>
            <div>
                <span className='m-title'>{name}</span>
            </div>
            <div className='viewpage-genre'>
                <span className='m-genre'><span style={{color:"red",fontWeight:"bold",fontSize:"20px"}}>Genre: </span> {genre}</span>
            </div>
            <div className='m-rating'>
                <span><span style={{color:"red",fontWeight:"bold",fontSize:"20px"}}>Rating: </span> ⭐ {imdb_rating}/10 </span><img className='imdb-img' src={ImdbImg} alt="ImdbImg" />
                <span className='votes'><span style={{color:"red",fontWeight:"bold",fontSize:"20px"}}>Votes:</span> {imbd_votes}</span>
            </div>
            <div className='m-duration'>
                <span><span style={{color:"dodgerblue",fontWeight:"bold",fontSize:"20px"}}>Duration: </span>{duration} Minutes</span>
            </div>
            <div className='m-year'>
                <span><span style={{color:"dodgerblue",fontWeight:"bold",fontSize:"20px"}}>Released Year: </span>{year}</span>
            </div>
            <div className='m-certificate'>
                <span><span style={{color:"dodgerblue",fontWeight:"bold",fontSize:"20px"}}>Certificate: </span>{certificate}</span>
            </div>
            <div className='dir-name'>
                <span><span style={{color:"dodgerblue",fontWeight:"bold",fontSize:"20px"}}>Director: </span>{director_name}</span>
            </div>
            <div className='writer-name'>
                <span><span style={{color:"dodgerblue",fontWeight:"bold",fontSize:"20px"}}>Writer: </span>{writter_name}</span>
            </div>
            <div className='cast-name'>
                <span><span style={{color:"dodgerblue",fontWeight:"bold",fontSize:"20px"}}>Cast:</span> {cast_name}</span>
            </div>
        </div>
    </div>
  )
}

export default ViewCard