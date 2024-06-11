import React, { useEffect, useRef, useState } from "react";

function Stopwatch(){

    const [isRunning,setIsRunning]=useState(false);
    const[elapsedTime,setElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startedTime=useRef(0);
    
    useEffect(()=>{
        if(isRunning){
            intervalIdRef.current=setInterval(()=>{
                setElapsedTime(Date.now()-startedTime.current)
            },10)
        }
        return ()=>{
            clearInterval(intervalIdRef.current);
        }
    },[isRunning])
    function start(){
        setIsRunning(true);
        startedTime.current=Date.now()-elapsedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }
    function displayTime(){
        let hours=Math.floor(elapsedTime/(1000*60*60));
        let minutes=Math.floor(elapsedTime/(1000*60)%60);
        let seconds=Math.floor(elapsedTime/(1000)%60);
        let milliSeconds=Math.floor(elapsedTime%1000/10);
        return `${pad(minutes)} : ${pad(seconds)} : ${pad(milliSeconds)}`
    }
    function pad(number){
        return (number<10 ? "0":"")+number;
    }
    return(
        <div className="container">
            <div>{displayTime()}</div>

            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Stopwatch;