import { useState } from "react";

function Derived (){
    const [users, setusers] = useState([]); //ye values ko update karenga ui mai //agar []  nahi doge to error ayga nahi samj skata value ko
    const [user, setuser] = useState("");  //isme value ko store karna hai 

 const handleAddusers = () =>{
        setusers([...users, user])  //users ke liye savi updates value user hota hai 
 }
 const total = users.length;
 const last = users[users.length-1];  //all these derived states 
 const unique = [...new Set(users)].length;  

    return(
        <div>
            <h1>calculate the value of dervied states</h1>
            <br></br>
            <h2>Total user:{total}</h2>
            <h3>Last user:{last} </h3>
            <h4>unique user:{unique}</h4>
            <input type="text" onChange={(event)=>setuser(event.target.value)} placeholder="usersname"></input>
            <button onClick={handleAddusers}>AddUsers</button>
            {
                users.map((item, index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }
        </div>
    )




}
export default Derived;