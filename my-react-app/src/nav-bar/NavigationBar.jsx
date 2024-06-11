import { useState } from 'react';
import { assets } from '../assets/assets';
import './NavigationBar.css'
import Cart from '../Cart/Cart';
// import {Link} from 'react-router-dom';

const NavigationBar=({setLogin})=>{
    const[line,setLine]=useState("home");
    // const[type,setType]=useState("sign-in");
    // function loginform(){
    //     return(
    //             <h1>{type}</h1>
    //     )
    // }
    
    return (
            // <>
            //     <div className="container">
            //         <Link to='/' ><img  src={assets.foodLogo}  className="image"alt="i"/></Link>
            //         <ul className='list-item'>
            //         <Link to='/' style={{ textDecoration: 'none',color:'black' }}>   <li onClick={()=>setLine("home")} className={line==="home" ? "active":""}>Home</li> </Link> 
            //             <li onClick={()=>setLine("about us")} className={line==="about us" ? "active":""}>Menu</li>
            //         <Link to='./App' style={{ textDecoration: 'none',color:'black' }}> <li onClick={()=>setLine("food")} className={line==="food" ? "active":""}>App</li></Link>
            //             <li onClick={()=>setLine("search")} className={line==="search" ? "active":""}>search</li>
            //         </ul>
                
            //         <div className="right-side">
            //             <img className='search-icon' src={assets.search}></img>
            //            <Link to='/Cart'> <img className='cart-icon' src={assets.cart}></img> </Link>
            //             <div className="dot"></div>
            //             <button className='button' onClick={()=>setLogin(true)}>sign-in</button>
            //         </div>
            //     </div>
            //  </>
            <>
                <div className="container">
                    <img  src={assets.foodLogo}  className="image"alt="i"/>
                    <ul className='list-item'>
                        <li onClick={()=>setLine("home")} className={line==="home" ? "active":""}>Home</li> 
                        <li onClick={()=>setLine("about us")} className={line==="about us" ? "active":""}>Menu</li>
                        <li onClick={()=>setLine("food")} className={line==="food" ? "active":""}>App</li>
                        <li onClick={()=>setLine("search")} className={line==="search" ? "active":""}>search</li>
                    </ul>
                
                    <div className="right-side">
                        <img className='search-icon' src={assets.search}></img>
                       <img className='cart-icon' src={assets.cart}></img>
                        <div className="dot"></div>
                        <button className='button' onClick={()=>setLogin(true)}>sign-in</button>
                    </div>
                </div>
             </>
        



        
    );
}
export default NavigationBar