import React from 'react'
// import "./ViewMore";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ViewCard from '../ViewMore/ViewCard';
import Navbar from '../NavBar';
import { Cards } from '../context/Context';





const ViewMore = () => {
 
  const [movies, setMovies]=useState([]);
  const auth=Cards();
  const getMovies = async (data)=>{
    try{
      
      setMovies(data);
    }catch(err){
      console.log(err);
    }
  }
  useEffect(()=>{
    console.log(auth.data);
    setMovies(auth.data)
    getMovies(auth.data);
    console.log(movies);
  },[])
  return (
    <>
    <Navbar/>
    <main className='main'>
        {
          // movies && movies.length > 0 && movies.map(movie => <ViewCard key={movie.id} movie={movie}/>)
          <ViewCard key={1} movie={movies} />
        }
    </main>
    </>
  )
}

export default ViewMore