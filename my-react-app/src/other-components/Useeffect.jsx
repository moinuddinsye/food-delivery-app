import React, { useEffect, useState } from "react";

function Useeffect(){

    let [time,setTime]=useState(new Date());

    useEffect(()=>{
       setInterval(()=>{
        setTime(new Date())
       },1000)
    })
    function changeTime(){
        let hours=time.getHours();
        let mints=time.getMinutes();
        const secs=time.getSeconds();
        const Medeterian=hours>12 ? "PM":"AM";
        hours=hours%12 || 12;
        return `${pad(hours)} : ${pad(mints)} : ${pad(secs)} ${Medeterian}` ;
    }
    function pad(number){
        return (number<10? "0":"") + number;
    }
    return (
        <div>
            
            <div className="main">
                <span>{changeTime()}</span>
            </div>
        </div>
    );
}

export default Useeffect