
import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

function StarRating({n=5}){
    const [rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);
    function handleClick(index){
        setRating(index);
    }
    function handleMouseEnter(index){
        setHover(index);
    }
    function handleMouseLeave(){
        setHover(rating);
    }
    return(
        <div>
            {
                [...Array[n]].map((_,index)=>{
                     <FaStar
                        key={index}
                        size={40}
                        onClick={()=>handleClick(index)}
                        onMouseMove={()=>handleMouseEnter(index)}
                        onMouseLeave={()=>handleMouseLeave(index)}
                    />;
                })
            }
        </div>
    );
}

export default StarRating;