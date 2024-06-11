import React, { useState } from 'react'
import { menu_list } from '../assets/assets'
import './MenuList.css'

const MenuList = () => {
  return (
    <div className='menu-container'>
      <div className="menu-list-items">
        <h1 className='menu-para'>Explore our Menu</h1>
        <p>Providing the best diet, our mission is to elevate your dining experience and satisfy your cravings</p>
        <div className="main-item">
        {menu_list.map((element,index)=>{
            return <div  className="menu-items">
              <div  className="image-fit">
                <img className="menu-images"src={element.menu_image} ></img>
              </div>
                
                <p>{element.menu_name}</p>
            </div>
        })}

        </div>
        
      </div>
        <div className="border"></div>
    </div>
  )
}

export default MenuList
