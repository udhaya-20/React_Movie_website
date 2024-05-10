import React from 'react';
import "./Navbarstyle.css";
import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../Images/logo.png';
import {MdAccountCircle} from "react-icons/md";
import { SearchMenu } from './SearchMenu';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/">
            <img className='logoimg' src={LogoImage} alt='LogoImage'/>
        </Link>
        <SearchMenu/>
        <div className='navmenu'>
            <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/blog">Blog</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="account">
                <NavLink to="/profile">
                    <MdAccountCircle size={20} style={{color:"white"}}/>    
                </NavLink>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar