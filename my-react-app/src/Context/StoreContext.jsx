// import { createContext, useState } from "react";
// import { food_list } from "../assets/assets";
// import { useActionData } from "react-router-dom";
// export const StoreContext=createContext(null)

// const StoreContextProvider=(props)=>{

//     const[cartItems,setCartItems]=useState({});

//     const addToCart=(itemId)=>{
//         if(!cartItems[itemId]){
//             setCartItems((prev)=>({...prev,[itemId]:1}))
//         }else{
//             setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
//         }
//     }
//     const removeFromCart=(itemId)=>{
//         setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//     }
//     const contextValue={
//         food_list,
//         addToCart,
//         removeFromCart,
//         cartItems,
//         setCartItems
//     }
//     return(
//         <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>
//     )
// }

// export default StoreContextProvider