// import logo from './favicon.png';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import "./index";
import Home from "./PageRouting/Home";
import Blog from "./PageRouting/Blog";
import About from "./PageRouting/About";
import Contact from "./PageRouting/Contact";
import SignUp from "./Components/Authentication/SignUpUser"
import Profile from "./PageRouting/Profile";
import MovieCard from './Components/MovieCard/MovieCard';
import LogIn from './Components/Authentication/LoginUser';
import ViewMore from './Components/ViewMore/ViewMore';
import { Context } from './Components/context/Context';
function App() {

  // const [movies, setMovies]=useState([]);

  // const getMovies = async ()=>{
  //   try{
  //     const { data } = await axios.get("https://movies-app.prakashsakari.repl.co/api/movies");
  //     setMovies(data);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
  // useEffect(()=>{
  //   getMovies();
  // },[])
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" /> 
    //     <p style={{animationName: "bounce",animationDuration:"2s"}}>CineWeb</p>
    //   </header>
    // </div>
 
    <div className='App'>  
      {/* <Home/>
      <LoginUser/> */}
      {/* <main className='main'>
        {
          movies && movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)
        }
      </main> */}
      <div>
        <>
        <Context>
          <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<LogIn/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/viewmore" element={<ViewMore/>}/>
            <Route path="/profile" element={<Profile/>}/>
            
          </Routes>
          </Context>
        </>
      </div>
    </div>
     );
}

export default App;
