import React from 'react'
import './DownloadApp.css'
import { assets } from '../assets/assets'
const DownloadApp = () => {
  return (
    <div className="download-app-container">
        <div className="app-info">
            <p>For Better Experience Download</p>
            <p> Get Spicy Meal App</p>
        </div>
        <div className="app-images">
            <img src={assets.appStore} className='app'></img>
            <img src={assets.playStore} className='play'></img>
        </div>
    </div>
  )
}

export default DownloadApp
