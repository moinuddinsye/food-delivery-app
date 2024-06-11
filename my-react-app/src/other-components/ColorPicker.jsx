
import React, { useState } from "react";

function ColorPicker(){
    const [color,setColor]=useState("#ffffff");
    function changeColor(event){
        setColor(event.target.value);
    }
    return(
        <div className="color-picker-container" style={{backgroundColor:color}}>

            <div className="color-pallete">
                <h1>Color Picker</h1>
                <p>selected color is {color}</p>
                
            </div>
            <p>select a color :</p>
            <input type="color" onChange={changeColor}></input>
            
        </div>
    );
}
export default ColorPicker