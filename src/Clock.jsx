import { useEffect, useState } from "react";

const Clock = ({color})=>{
    const [time , settime] = useState('0');

    useEffect(() => {
    setInterval(() => {
        settime(new Date().toLocaleTimeString());
    }, 1000);
    }, [])

    return(
    
        <div style={{color:color, border:"1px solid green", backgroundColor:"black", width:"120px",padding:"10px",borderRadius:"5px"}}>
        <h1>{time}</h1>
         
        </div>
    )
}

export default Clock; 
