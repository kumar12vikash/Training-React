import { useState } from "react";


function Lifting (){  //this is main components of lifting user like app.js jaisa 
    const[user , setuser] = useState('');
    return(
        <div>
            <h1>Lifting satatesand main app.js componentss </h1>
            <Adduser setuser = {setuser}/>
            <Displayuser user = {user}/>
        </div>
    )   
}

export function Adduser({setuser}){  //named export like a componets one 

    return(
        <div>
            <input type="text" onChange={(event)=>setuser(event.target.value)} placeholder="eneter the value" ></input> 
                     {/**setuser ko set karke as props get karna hoga componest mai  */}
            <h3>Adduser:</h3>
        </div>
    )

}
export function Displayuser({user}){ //named componets like a componets two
    return(
        <div>
            <h1>{user}</h1>
        </div>
    )
}
export default Lifting;