//mport { Forwordref } from "react"

import { useRef } from "react";
import Newref from "./Newref";



function Forwordref(){
    const inputRef = useRef(); //agar aha pe tum inputRef.currurent ko handle karta to errr dega or function ke outside render karna ok 
   
    const forwordhandle = ()=>{
    inputRef.current.value= 1000;
    inputRef.current.style.color= 'red';
    inputRef.current.focus();
        
    }
    return(
        <div>
            <Newref ref = {inputRef} />
            <button onClick={forwordhandle}>updateref</button>
        </div>
    )
}
export default Forwordref;

{/**agar app app.js ya alag folder se put karte to value input ko alag folder mai rakhkar forword kar sakte ho  */}