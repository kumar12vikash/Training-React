import { useRef } from "react";

function Useref (){
    const inputRef =  useRef(null) //ham isko null pass kare quki hame input filed ko ref karna hai 

    const Inputhandler = ()=>{ //is button ko karne ke bad fouc hoga value change hoga sara click ke bad rakhe hai 
        console.log(inputRef);  //sara control is value inputref mai aa gya 
        inputRef.current.focus();
        inputRef.current.style.color = "green";
        inputRef.current.placeholder = "enetr password";
        inputRef.current.value = "123";
    }
    const togglehandler = ()=>{  //click karne par function ko click mmai ham eonclick ko sara dekhna padata hai
       if( inputRef.current.style.display!= "none"){
        inputRef.current.style.display="none"
       }else{
        inputRef.current.style.display="inline"
       }
    }
    const h2ref = useRef(null);
    const sumbithandler = ()=>{
        h2ref.current.style.color = "red";
        
    }

    return(
        <div>
            <h1>Handle useref with html elements </h1>
            <button onClick={togglehandler}>toggle</button>
             <input ref={inputRef} type="text" placeholder="enter your name "></input>
             <button onClick={Inputhandler}>focus on input field</button> {/**sara khel button clicked ke bad hoga  */}<br></br>
             <h2 ref={h2ref}>next handle </h2>
             <button onClick={sumbithandler}>sumbit</button>
        </div>
    )

   

}
export default Useref;
