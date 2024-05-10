import React from 'react';
import "./Homepagestyle.css";
import HomeImage from "../Images/backhome 2.jpg";
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard/MovieCard';
import { Link } from 'react-router-dom';

function Homepage() {

  const [movies, setMovies]=useState([]);

  const getMovies = async ()=>{
    try{
      const { data } = await axios.get("http://localhost:5010/api/movies");
      setMovies(data);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    getMovies();
  },[])
  return (
    <div className="home">
        <div className="mask">
            <img className="homeimg" src={HomeImage} alt="HomeImage"/>
        </div>
        <div className='info'>
          <p>Watch movies anytime, everywhere</p>
          <div className='auth-container'>
                <Link to="/login" className="auth-btn">Log In</Link>
                <Link to="/signup" className="auth-btn btn-light">Sign Up</Link>
            </div>
        </div>
        <div className='explore'>
          <h2>Explore our movies</h2>
        </div>
        <main className='main'>
        {
          movies && movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
        }
      </main>
    </div>
  )
}

export default Homepage