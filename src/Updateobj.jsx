/* eslint-disable react-hooks/immutability */
import { useState } from "react";

function Updateojb(){
    const [data , setdata] = useState({
        name: "vikash",
        address:{
            city:"Delhi",
            country:"India"
        }
    })
    const handleName = (val)=>{
        data.name=val; //uppar value data access kar sakte hai  //aise dega data.name error red to apko comment karnna hai
        setdata({...data});
       // console.log(data);
        
    }
    const handleCity = (city)=>{
        data.address.city = city;//nested object inside wala aaise handle karte hai 
        setdata({...data,address:{...data.address,city}});
       //console.log(city);
       
        
    }

    return(
        <div>
            <h1>updates the values of object</h1>
            <input type="text" placeholder="eneter your name" onChange={(event)=>handleName(event.target.value)}></input>
            <input type="text" placeholder="enter your city" onChange={(event)=>handleCity(event.target.value)}></input>
            <h2>Name: {data.name}</h2>
            <h2>City: {data.address.city}</h2>
            <h2>Country:{data.address.country}</h2>
        </div>
    )


}
export default Updateojb;