import { useContext } from "react"
import { SubjectContext } from "./Hooks/ContextData"

export default function Subjects (){
   const subject = useContext(SubjectContext)  //data ham createcontect se le liye subject ka data 
    return(
        <div style={{backgroundColor:"green", padding: 10}}>
            <h1>Subjects is: {subject} </h1>
        </div>
    )
}