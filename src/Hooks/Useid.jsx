import { useId } from "react";

function Userform (){

  {/*}  const name = useId();  //isse accha app akele user ke id ko differenet method mai use kar sakte hai differnent ro name , ro password 
    const password = useId(); //isko use karna hai form mai htmlfor = {name } , id = {name } password vi aise access karna hai 
    const terms = useId();
    const skills = useId() */}
    const user = useId(); //isko htmlfor mai {user+"name "}, {user+"passwowrd aise karke rakhna hai "}
    return(
        <div>
          {/*  <h1>{name}</h1> aise karke her ek unique id kar sakte ho hamesa jo const ke under define hai varibale   */} 
         <form action= "">
            <label  htmlFor={ user +"name"}>Enter your name : </label>
            <input id= {user+ "name"} type="text" placeholder="enter  name "></input>
            <br></br>
            <label  htmlFor={ user + "password"}>Enter your password : </label>
            <input id= { user + "password"} type="text" placeholder="enter  name "></input>
            <br></br>
            <label  htmlFor={ user + "skills"}>Enter your skills : </label>
            <input id= { user +"skills"} type="text" placeholder="enter  name "></input>
            <br></br>
             <label  htmlFor = { user + "terms"}> terms & condition : </label>
            <input id= { user + "terms"} type= 'checkbox' placeholder="enter  name "></input>
            <br></br>

        </form> 
        </div>
    ) 

}
export default Userform;