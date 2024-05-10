import React, { useState } from 'react'
import "./LoginUser";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Validation from './SignUpValidation';


const SignUpUser = () => {
  const [values, setValues] = useState({
    UserName: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const [errors, setErrors] = useState({})

  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }



  const handleSubmit = (event) =>{
   // event.preventDefault();
    setErrors(Validation(values));
    // if(errors.name === "" && errors.email === "" && errors.password === ""){
      // axios.post('http://localhost:5010/login/signup', values)
      // .then((res) => {
      //   if(res.data.message==="success"){
      //       navigate("/");

      //   }

      //   else{
      //     alert(res.data.message);
      //   }
      // })
      // .catch(err => console.log(err));
    // }
  }

  const [action, setAction] = useState("Sign Up");
  return (
    <div className='log-container'>
      <div className='log-header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs' onClick={handleSubmit}>
        <div className='log-input'>
          <div className='icon'><IoMdPerson size={30}/></div>
          <input type='text' placeholder='Enter Name' name='UserName' onChange={handleInput}></input>
        </div>
        {errors.name && <span className='text-danger'>{errors.name}</span>}
        <div className='log-input'>
          <div className='icon'><MdEmail size={30}/></div>
          <input type='email' placeholder='Enter Email' name='email' onChange={handleInput} className='form-control rounded-0'></input>
        </div>
        {errors.email && <span className='text-danger'>{errors.email}</span>}
        <div className='log-input'>
          <div className='icon'><RiLockPasswordFill size={30}/></div>
          <input type='password' placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'></input>
        </div>
        {errors.password && <span className='text-danger'>{errors.password}</span>}
      </div>
      {/* {action==="Sign Up"?<div></div>:
      <div className='forgot-password'>Forgot Password? <span>Click Here!</span></div>} */}
      <div className='submit-container'>
        <Link to="/signup" className={action==="Log In"?"submit gray":"submit"} onClick={()=>{
          setAction("Sign Up");
        //  handleSubmit();
          }}>Sign Up</Link>
        <Link to="/login" className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Log In")}}>Log In</Link>  
      </div>
    </div>
  )
}

export default SignUpUser