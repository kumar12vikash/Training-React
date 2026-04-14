import { useState } from "react";

function Color({name = "user not found"}){

    return(
        <div>
            <h1>color of value and passed as props </h1>
            <h2>hii {name}</h2>

        </div>
    )
  
}

  export function Children({children,color = "green"}){   //2ND COMPONENTS about color
        return(
           
            <div style={{color:color, border:"10px solid black", width:"300px"}}>
                {children}
            </div>

        )
    }

             export function Inputget() {
                const [val , setval] = useState('');
                return(
                    <div>
                        <h1>hello input </h1>
                       <input type="text" value={val}  placeholder="enterhere" onChange={(event)=>setval(event.target.value)} ></input><br></br><br></br>
                       <h1>{val}</h1>
                        <button onClick={()=>setval("")}>clearvalue</button>
                    </div>
                )
             }                                                 //3RD COMPONENTS IN GET INPUT 
export default Color;