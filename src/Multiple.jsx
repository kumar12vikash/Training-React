import { useState } from "react";

function Multiple(){
    const [counter2 , setcounter2] = useState(0);

    return(
        <div>
            <h1>multiple condition </h1>
            {counter2} <br></br>
            <button onClick={()=>setcounter2(counter2+1)}>counter</button>
             
        {
            counter2 == 0 ?<h1>condition 0</h1>
            :counter2 ==1?<h3>condition 1 </h3>
            :counter2 ==2?<h3>condition 2 </h3>
            :counter2 ==3?<h4>condition 3</h4>
            :counter2 ==4?<h4>condition  4</h4>
            :<h5>other condition </h5>
            
        }
        </div>
    )
}

export default  Multiple;