import React, { useState } from "react";


function Onchange(){
    const[name,setName]=useState("guest");
    const[quantity,setQuantity]=useState(1);
    const[textArea,setTextArea]=useState("");

    function changingName(event){  
            setName(event.target.value);
        }
    function changingNum(event){
        setQuantity(event.target.value);
    }
    function changingTextArea(event){
        setTextArea(event.target.value);
    }
    return(
        <div>
        <input type="text" value={name} onChange={changingName}/>
        <p>your name is {name}</p>

        <input type="number"  onChange={changingNum}></input>
        <p>your quantity is {quantity}</p>

        <textarea onChange={changingTextArea}></textarea>
        <p>your text area is {textArea}</p>
       
        </div>
        
    );
}

export default Onchange;