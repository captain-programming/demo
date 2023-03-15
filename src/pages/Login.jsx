import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginAccount } from '../store/action';
import Styles from "./login.module.css";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
  const dispatch = useDispatch();

  const loginForm = (e) => {
    e.preventDefault();
    dispatch(loginAccount(name, password, navigate))
  }

  return (
    <>
    <div className={Styles.loginPage}>
      <div className={Styles.loginBox}>
        
          <h3>Welcome!</h3>
          <h2>Sign in to</h2>
          <p>Lorem ipsum dolor sit.</p>
        

        <form className={Styles.loginform} onSubmit={loginForm}>
          <label htmlFor="uname"> User Name</label>
          <input type={"text"} placeholder="Enter your user name" onChange={(e)=> setName(e.target.value)}/>
          <label htmlFor="password"> Password</label>
          <input type="password" placeholder='Enter your password' onChange={(e)=> setPassword(e.target.value)}/>
          <input type={"submit"} value="Login"/>
          <div>
            <p>Dont't have an account ? <Link to={"/signup"} style={{fontWeight: 'bold', color: 'black', textDecoration: "none"}}>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Login