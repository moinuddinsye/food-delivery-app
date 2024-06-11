import React, { useState } from "react";

function Counter(){
    let[count,setCount]=useState(0);
    const decrease=()=>{
        setCount(count--);
    }
    const reset=()=>{
        setCount(0);
    }
    const increase=()=>{
        setCount(count++);
    }
    return(
        <div>
            <p className="countValue">{count}</p>
            <button className="btn" onMouseUp={()=>{decrease()}}>Decrement</button>
            <button className="btn" onClick={reset}>Reset</button>
            <button className="btn" onClick={increase}>Increase</button>
        </div>
    );
}

export default Counter