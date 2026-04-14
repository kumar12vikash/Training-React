import { useState } from "react";

const Counter =()=>{
    const [counter , setcounter] = useState(0);
    const [rcounter, rsetcounter] = useState(10);
    return(
        <div>

        <h3>counter: {counter}</h3>
        <h4>rcounter: {rcounter}</h4>
        <button onClick={()=>setcounter(counter + 1)}>incresse</button>
        <button onClick={()=>rsetcounter(rcounter-1)}>decrese</button>

        </div>
    )
}

export default Counter;