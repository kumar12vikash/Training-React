import { useState } from "react";

function Skills(){
    const [skills, setskills]= useState([])

    const handlecheckbox = (event)=>{
        console.log(event.target.value, event.target.checked)
        if ( event.target.checked){
            setskills([...skills, event.target.value])
        }else{
            setskills([skills.filter((item)=>item!==event.target.value )])
        }
    }
    return(
        <div>
          <h1>CheckBox of skilss</h1>
          <input type="checkbox" onChange={handlecheckbox} id="mongodb" value="mongodb"></input> 
          <label htmlFor="mongodb" >mongodb</label>
        <br></br>
        <br></br>

         <input type="checkbox" onChange={handlecheckbox} id="javascripts" value="javascripts"></input> 
          <label htmlFor="javascripts" >javascripts</label>
        <br></br>
        <br></br>

         <input type="checkbox" onChange={handlecheckbox} id="react" value="react"></input> 
          <label htmlFor="react" >react</label>
        <br></br>
        <br></br>

         <input type="checkbox" onChange={handlecheckbox} id="node" value="node"></input> 
          <label htmlFor="node" >Node</label>
        <br></br>
        <br></br>
        <h1>{skills.toString()}</h1>

        </div>
    )
}
export default Skills;