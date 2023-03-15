import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createAccount } from '../store/action';
import Styles from "./sign.module.css";

const Signup = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    user_name: ""
  });
  const [conform, setConform] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFormInfo = (e) => {
    const {name, value} = e.target;

    setFormDetails({...formDetails, [name]: value});
  }

  const submitForm = (e) => {
    e.preventDefault();

    // console.log(formDetails)

    if(formDetails.password==="" && formDetails.user_name==="" && formDetails.email===""){
      alert("Please filled data");
    }else{
      if(conform===formDetails.password){
        dispatch(createAccount(formDetails, navigate));
        setFormDetails({
          email: "",
          password: "",
          user_name: ""
        })
        setConform("");
      }else{
        alert("Passwor does not match");
      }
    }
  }

  return (
    <div className={Styles.signupPage}>
      <div className={Styles.signupBox}>
        
          <h3>Welcome!</h3>
          <h2>Sign in to</h2>
          <p>Lorem ipsum dolor sit.</p>
        

        <form className={Styles.signupform} onSubmit={submitForm}>
          <label htmlFor="email">Email</label>
          <input value={formDetails.email} type={"text"} name={"email"} placeholder="Enter your email" onChange={getFormInfo}/>
          <label htmlFor="user-name"> User Name</label>
          <input value={formDetails.user_name} type={"text"} name="user_name" placeholder="Enter your user name" onChange={getFormInfo}/>
          <label htmlFor="password"> Password</label>
          <input value={formDetails.password} type="password" name='password' placeholder='Enter your password' onChange={getFormInfo}/>
          <label htmlFor="password">Conform Password</label>
          <input value={conform} type="password" placeholder='Conform password' onChange={(e) => setConform(e.target.value)}/>
          <input type={"submit"} value="Register"/>
          <div>
            <p>Already have an account ? <Link to={"/"} style={{fontWeight: 'bold', color: 'black', textDecoration: "none"}}>Login</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup