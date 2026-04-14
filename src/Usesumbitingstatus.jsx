import {useFormStatus} from 'react-dom'
const Usesumbitingstatus = ()=>{



    const handlesumbit =async()=>{
         await new Promise((res)=>setTimeout(res,2000))  //res asyns keywords and awit pass 
        console.log("sumbit");
            
    }
    function Cutomerform(){
         const {pending} = useFormStatus();   //aha se pending nikalenge jab hamra statu form sumbit jab tak nhi hoga tak tak pending dega uskebad true dega output 
         console.log(pending);
         return(
            <div>  
            <input type="text" placeholder="enter your name"></input>
            <br/>
            <br></br>
            <input type="text" placeholder="enetr your password"></input>
            <br/>
            <button disabled={pending}>{pending?"sumbiting":"sumbit"}</button>
            </div>
         )
         
    }
    return(
    <div>
        <h1>form sumbit disblea with formStatus code </h1>
         <form action={handlesumbit}>
            <Cutomerform/>
        </form>
       
    </div>
    )
}
export default Usesumbitingstatus;