
import { useRef } from "react";

function Uncontroll (){
    const userRef= useRef();
    const  passwordRef = useRef();  //this is form with ref 

     const handlerefform = (event) =>{
     const user =  userRef.current.value;
     const password =passwordRef.current.value;
        event.preventDefault();
        console.log("handleformref", user, password);
        

    } 
    
    const handleformsumbit = (event)=>{
     event.preventDefault()  //agar app event nahi pass karte ho to relod  ho jaygi 
      const user = document.querySelector("#user").value ;
      const  password = document.querySelector("#password").value;
      console.log( user, password)

    }
    

   

return(
    <div>
        <h1>uncontrolle componets with dom</h1>
       <form action="" method="post" onSubmit={handleformsumbit}>
        <input type="text" id="user" placeholder="enteruser name "></input>
        <br></br>
        <input type="text" id="password" placeholder="enter password"></input>
        <br></br><br></br>
        <button>sumbit</button>
       </form>
        <hr></hr>
        
        <form action="" method="post" onSubmit={handlerefform}>
        <input type="text" ref={userRef} id="userRef" placeholder="enteruser name "></input>
        <br></br> <br></br>
        <input type="text" ref={passwordRef} id="passwordRef"  placeholder="enter password"></input>
        <br></br><br></br>
        <button>sumbit</button>
       </form> 

    </div>
    
)

}
export default Uncontroll;