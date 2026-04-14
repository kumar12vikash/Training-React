/* eslint-disable react-hooks/immutability */
import { useState } from "react";

function UpdateArray (){
    const [data, setdata] = useState(["vikash", "akash","anil" ]);

    const [details, setdetails] = useState([
        {name:"vikash", age: '25'},
        {name:"akash", age: '23' },
        {name:"ajit", age: '26' }

    ])

    const handlename = (name)=>{
        data[data.length-1] = name; //aha pe [] pass karke . nahi dena hai parameter 
        setdata([...data]) //arry mai update karne ka tarika ahi hai 
    }

    const handleage = (age) =>{
        details[details.length-1].age =age; //inside wala aise he updaets hota hai 
        setdetails([...details]);
    }

    return(
        <div>
            <h1>updates the value of last in Array</h1>
            
            <input type="text" placeholder="enetr your name" 
            onChange={(event)=>handlename(event.target.value)}></input>

            {
                data.map((item, index)=>(
                    <h1 key={index}>{item}</h1>
                ))
            }
            <hr></hr>
            <h1>update the inside age </h1>
            
            <input type="text" placeholder="enetr your name" 
            onChange={(event)=>handleage(event.target.value)}></input>
             {
                details.map((item, index)=>(
                    <h1 key={index}>{item.name}, {item.age}</h1>
                ))
            }

        </div>
    )

}
export default UpdateArray;