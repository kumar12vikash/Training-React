import { useEffect, useState } from "react";

const Checkeff = ()=>{
const [counter, setcounter] = useState(0);
const [data, setdata] = useState(0);


//counterfunction();    //ab ye bar bar call ho raha hai 
function counterfunction (){
    console.log( "counterfunction", counter) // ab ye hamko srif counter function mai he call ho baki data mai na ho to isko counter dependeyy mai pass kar sakte hai
}
    function callback(){
        console.log("called the function")
    }
    //callback() //agar aha call karenge to ye do bar aisi call hoga or jab jab click karenge call hoga isliy handle karna ha isko 

    useEffect(()=>{
callback()  //ab ye handle hoke 1 bar he chala bar bar clcick karne pe nahi chala 
},[])

useEffect(()=>{
    counterfunction()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[counter]) //single state he chale 
    return(
        <div>
            <h1>handloe side effect of inside componets </h1>
            <button  onClick={()=>setcounter(counter+1)}>counter: {counter}</button>
            <button onClick={()=>setdata(data + 1)}>data: {data}</button>
        </div>
    )


}
export default Checkeff;