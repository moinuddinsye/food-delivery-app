import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <>
        <div className="main-footer-container">
        <div className="footer-left">
            <img src={assets.foodLogo}></img>
            <p>Our company restaurants provides one of the finest and best food Experience for customers, Dont wait give a try</p>
            <p>contact us on social Media</p>
            <img src={assets.fb}></img>
            <img src={assets.insta}></img>
            <img src={assets.twitter}></img>
        </div>
        <div className="footer-middle">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Privacy policy</li>
                <li>Delivery</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>GET-IN_TOUCH</h2>
            <ul>
                <li>+1-222-125-4485</li>
                <li>contact@spicymeal.com</li>
            </ul>
        </div>
        <p className='footer-copy-right'>Copyright 2024 ©️ Spicy Meal.com - All Rights Reserved </p>
    </div>
    
    </>
  )
}

export default Footer
