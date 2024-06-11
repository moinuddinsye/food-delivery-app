import React, { useState } from "react"
function UpdateFunctionOfArray(){
    const[food,setFood]=useState(["mango","apple","banana"]);
    function submitItems(){
        const item=document.getElementById("foodItems").value;
        setFood([...food,item]);
        document.getElementById("foodItems").value="";


    }
    function deleteFood(i){
        setFood(food.filter((_,index)=>i!==index));
    }
    
    return(
        <div>
            <h6 className="h">Food Items</h6>
            <ul>
                {food.map((items,index)=><li key={index} onClick={()=>deleteFood(index)}>{items}</li>
                )}
            </ul>
            <input id="foodItems" type="text" placeholder="add-items" />
            <button onClick={submitItems}>submit</button>
            
        </div>
    );
}

export default UpdateFunctionOfArray