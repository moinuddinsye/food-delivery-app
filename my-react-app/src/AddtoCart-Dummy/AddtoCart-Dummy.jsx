import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import './Dummy.css'
import { StoreContext } from '../Context/StoreContext';

const Dummy = ({item,key,id}) => {
    const[itemCount,setItemCount]=useState(0);
    // const[cartItems,addToCart,removeFromCart,setCartItems]=useContext(StoreContext);
    const[cartItems,setCartItems]=useState({});

    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }

  return (
    <div  className="item-container">
                            <div className="food-items">
                                <img src={item.image} className='food-image'></img>
                                <p className='food-name'>{item.name}</p>
                                <img src={assets.stars} className='food-star'></img>
                                <p>{item.description}</p>
                                <p>Price is ${item.price}</p>
                                {!cartItems[id]? <button onClick={()=>addToCart(id)}>add to cart</button>:
                                <div className="item-cart-container">
                                    <button onClick={()=>removeFromCart(id)}>  remove </button>
                                    <p> {cartItems[id]}</p>
                                    <button onClick={()=>addToCart(id)}>  add </button>
                                </div>
                                }
                            </div>
                        </div>
  )
}

export default Dummy
