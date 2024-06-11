import React, { useState } from 'react'
import { assets } from '../assets/assets'
import './Dummy.css'

const Dummy = ({item,key}) => {
    const[itemCount,setItemCount]=useState(0);
  return (
    <div  className="item-container">
                            <div className="food-items">
                                <img src={item.image} className='food-image'></img>
                                <p className='food-name'>{item.name}</p>
                                <img src={assets.stars} className='food-star'></img>
                                <p>{item.description}</p>
                                <p>Price is ${item.price}</p>
                                {!itemCount? <button onClick={()=>setItemCount(prev=>prev+1)}>add to cart</button>:
                                <div className="item-cart-container">
                                    <button onClick={()=>setItemCount(prev=>prev-1)}>  remove </button>
                                    <p> + {itemCount}</p>
                                    <button onClick={()=>setItemCount(prev=>prev+1)}>  add </button>
                                </div>
                                }
                            </div>
                        </div>
  )
}

export default Dummy
