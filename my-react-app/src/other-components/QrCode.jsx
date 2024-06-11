import QRCode from "react-qr-code";
import React, { useState } from "react";
function QrCode(){
    const[input,setInput]=useState("");
    const[QrCode,setQrCode]=useState("");
    function generateQrCode(){
        setQrCode(input);
        setInput("");
    }
    return(
        <div>
            <input type="text" onChange={(e)=>{setInput(e.target.value)}} placeholder="enter the name" value={input}></input>
            <button disabled={input && input.trim()!=="" ? false:true} onClick={generateQrCode}>Generate</button>
           <div>
           <QRCode value={QrCode}></QRCode>
            </div> 
        </div>
    )
}

export default QrCode