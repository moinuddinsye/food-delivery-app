import React, { useState } from 'react'
import './loginComponent.css'
import { assets } from '../assets/assets'

const LoginComponent = ({setLogin}) => {
    const[currState,setCurrState]=useState("sign-up");
  return (
    <div className="login-component-main">
        <div className="login-main-div">
        
        <form className='login-main'>
            <img className="cancel-image" onClick={()=>setLogin(false)} src={assets.cancel}></img>
            <div className="login-container">
                <h1>{currState}</h1>
                {/* <img className="cancel-image" onClick={()=>setLogin(false)} src={assets.cancel}></img> */}
            </div>
            <div className="main-login-content">
                {currState==="sign-up"? <input className='inputs' type="text" placeholder=' your name' required></input>:<></>}
                <input className='inputs' type='text' placeholder='your  email' required></input>
                <input className='inputs' type='password' placeholder=' password' required/>
            </div>
            <button className='login-button'>{currState==="sign-up"? "Create Account": "Login"}</button>
            <div className="terms">
                <input type='checkbox'></input>
                <p>By continue you agree to our terms and policy</p>
            </div>
            <div className="show-login">
                {currState==="sign-up" ? <p>Already have an account ? <span onClick={()=>setCurrState("login")}>Login here</span></p>:<p>Create new Account ?<span onClick={()=>setCurrState("sign-up")}>click here</span></p>}
            </div>
        </form>
    </div>
    </div>
  )
}

export default LoginComponent
