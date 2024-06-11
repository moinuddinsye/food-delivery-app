import React, { useState } from 'react'
import { assets, food_list } from '../assets/assets'
import './FoodDisplay.css'
import Dummy from '../Dummy/Dummy';
// import { StoreContext } from '../Context/StoreContext'

const FoodDisplay = () => {
    // const food_list=useContext(StoreContext)
    // const[itemCount,setItemCount]=useState(0);
  return (
    <div className="food-list-container">
        <h1>Top dishes near you</h1>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                return( <Dummy item={item} key={index}/>)
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
