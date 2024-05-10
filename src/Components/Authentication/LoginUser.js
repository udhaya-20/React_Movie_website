import React, { useState } from 'react';
import './LoginUserStyle.css';
// import { IoMdPerson } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Validation from './LoginValidation';
import axios from 'axios';

const LoginUser = () => {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }

  const submitButton=()=>{
    axios.get("http://localhost:5010/login/",values).then((res)=>{
      console.log(res.data.message);
    }).catch((err)=>{
      console.log(err)
    });

  }


  const handleSubmit = (event) =>{
    event.preventDefault();
    setErrors(Validation(values));
  }

  const [action, setAction]  = useState("Log In");
  return (
    <div className='log-container'>
      <div className='log-header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs' onClick={handleSubmit}>
        {/* {action==="Log In"?<div></div>:
        <div className='log-input'>
          <div className='icon'><IoMdPerson size={30}/></div>
          <input type='text' placeholder='Enter Name'></input>
        </div>} */}
        <div className='log-input'>
          <div className='icon'><MdEmail size={30}/></div>
          <input type='email' placeholder='Enter Email' name="email" onChange={handleInput}></input>
        </div>
        {errors.email && <span className='text-danger'>{errors.email}</span>}
        <div className='log-input'>
          <div className='icon'><RiLockPasswordFill size={30}/></div>
          <input type='password' placeholder='Enter Password' name="password" onChange={handleInput}></input>
        </div>
        {errors.password && <span className='text-danger'>{errors.password}</span>}
      </div>
      <div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>
      <div className='submit-container'>
        <Link to="/signup"  className={action==="Log In"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</Link>
        <Link to="/login" className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In");submitButton()}}>Log In</Link>  
      </div>
    </div>
  )
}

export default LoginUser