import React, { useState, useSyncExternalStore } from "react";

function ObjectUpdation(){
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    const[year,setYear]=useState(2001);
    const[info,setInfo]=useState([]);
    function handleFirstName(event){
        setFirstName(event.target.value);
    }
    function handleLastName(event){
        setLastName(event.target.value);
    }
    function handleYear(event){
        setYear(event.target.value);
    }
    function addInfo(){
        const newInfo={name:firstName+lastName,
                    age:year};
        setInfo(i=>[...i,newInfo]);
        setFirstName("");
    }
    return(<div>
        <ul>
            {info.map((inf,index)=><li key={index}>{inf.name} {inf.age}</li>)}
        </ul>
        <input type="text"value={firstName} onChange={handleFirstName} placeholder="enter first name"></input><br/>
        <input type="text" id="last" onChange={handleLastName} placeholder="enter last name"></input><br/>
        <input type="number" onChange={handleYear} placeholder=" enter age" value={year}></input><br/>
        <button onClick={addInfo}>submit</button>
    </div>);
}
export default ObjectUpdation;