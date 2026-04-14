import React, { useState } from 'react'
import Login, { From, Register, } from './User'  //many import acess here 
import Counter from './Counter';
import Toggle from './Toggle';
import Multiple from './Multiple';
import Props from './Props';
import Color,{Children, Inputget} from './Color';
import Controlle, { Gender,Array, } from './Controlle';
import Skills from './Skills';
import Clock from './Clock';
import Nested from './Nested';
import Checkeff from './Hooks/Checkeff';
import EX1 from './Hooks/EX1';
import Useref from './Hooks/Useref';
import Uncontroll from './Uncontroll';
import Funprops from './Funprops';
import Forwordref from './Hooks/Forwordref';
import Usesumbitingstatus from './Usesumbitingstatus';
import Usetransition from './Hooks/Usetransition';
import Pureim from './Pureim';
import Derived from './Derived';
import Lifting from './Lifting';
import Updateojb from './Updateobj';
import UpdateArray from './UpdateArray';
import UseactionState from './Hooks/UseactionState';
import Userform from './Hooks/Useid';
import { Fragment } from 'react';
import Fragment1 from './Fragment';
import College2 from './College2';
import { SubjectContext } from './Hooks/ContextData';
import Togglehooks from './Hooks/CustomHooks';

//import Checkeff from './Hooks/Checkeff';


function App() {
   const [color, setcolor] = useState('red');
  const [fruit , setfruits] = useState("Apple")
  const [display, setdisplay] = useState(true);
      //*about useeffect handle 
const[count , setcount] = useState(0)
const[data, setdata] = useState(0);
const [display2, setdisplay2] = useState(true);

//about context data of context Api change subject name 
const [subject , setsubject] = useState("English")

//*pass function as a props parent to child compeneets 
      const username =(name)=>{ //name declare to isko alert mai hoke name pass karna hoga 
       // alert("username is passed")
       alert(name);
      } 

      const getuser = ()=>{
        alert("you can pass functionn as props ")
      }



      //end of example ex1 here //
     //*props mai variable pass hoti hai 
    {/*let username = "vikash kumar";
    let age = 25;
    let email = "kumar399067@gmail.com"; */}  //yese srif varibale ko pass in props 

    //pass object in props 
    {/*const userObj3 = {
      name: "vikash kumar",
      age: 24,
      email: "kumar399067"
    } */}
     const userObj2 = {
      name: "rahul kumar",
      age: 89,
      email: "kumar399067@gmail.com"
    }
      //*arry of collge 
     // let collgename = ["IEM", "BIT SINDRI", 'RIT', 'NIT'];


 const handler =()=>{
   //setfruits "BANana"; yese vi karke direct app onclicick = {setfruits} kar sakte ho 
   return "Banana";
 }

 //about 3rd round in custom hooks 
 const [value, toggleValue] = Togglehooks(true)
      
  

 
  return (
    <div>
      <h1>our first componrnts  </h1>
      <Login/>
      <Register/>
      <From/>

    <h2>fruits some show: {fruit} </h2>
    <button onClick={()=>setfruits(handler)}>some froot add</button>
    <Counter/>

    <h1>toogle and hidden show </h1>
    <button onClick={()=>setdisplay(!display)}>toggle</button>
   {/*{display?<h2>vikash jii</h2>:null} */}
   {display?<Toggle/>:null}
   <Multiple/>
  {/*} <Props name = "vikash kumar" age  = {26} email = "kumar399067@gmail.com" />*/}
  
 {/* <Props name = {username} age = {age} email= {email} /> */}
 {/* <Props name = {userObj}/> */}
  <Props user = {userObj2}/>
  <Color name = "vikash jii"/>
  <Color />
  <Children color='orange'>
    <h1>hello everyone</h1>  {/** yese ham pass parent se karte hai kucv vi pass kar sakte hai but childern chota pass karna nhi to display nahi hoga  */}
  </Children>
 
 <Children color='blue'>
  <h3>hii new add</h3>
  <h2 style={{color:"red"}}>plessse login </h2>
 </Children>

 <Children>
  <h3>new add componets</h3>
 </Children>
 
 <Inputget/>
 <hr></hr>
 <Controlle/>
 <hr></hr>

    <Skills/>
    <hr></hr>
    <Gender/>
    <hr></hr>
    <Array/>
    
  {/**pass the data in date.now() .tolocalstringdate()*/}
  <select onChange={(event)=>setcolor(event.target.value)}> 
      <option value={"orange"}>orange</option>
      <option value={"black"}>black</option>
      <option value={"red"}>red</option>
      <option value={"green"}> green</option>
    </select>
    <Clock color={color}/>
      <hr></hr>
      <Nested/>
      <Checkeff/>
      <hr></hr>
      {
        
        display2 ?  <EX1 count = {count} data = {data}> </EX1>:null
      }
      
      <button style={{border:"1px solid blue", backgroundColor:"pink" }} onClick={()=>setcount(count+1)}>counter:</button>
      <button style={{border:"1px solid red", backgroundColor:"orange" , margin:"10px"}} onClick={()=>setdata(data +1)}>data:</button><br></br><br></br>
      <button style={{border:"1px solid red", backgroundColor:"red"}} onClick={()=>setdisplay2(!display2)}>toggle</button>
      <hr></hr>
      <Useref/>
      <hr></hr>
      <Uncontroll/>
      <hr></hr>
      <Funprops username = {username} getuser={getuser} name = "vikash kumar "/>
      <Funprops username = {username} getuser={getuser} name = "akash kumar"/>
      <Funprops username = {username} getuser={getuser} name = "anil kumr"/>
      <Funprops username = {username} getuser={getuser} name= "peter"/>
          {/**forword ref from parenet to child componets  */}
      <Forwordref/>
    <hr></hr>
    <Usesumbitingstatus/>
    <hr></hr>
    <Usetransition/>
    <hr></hr>
    <Pureim/>
    <br></br>
    <Derived/>
    <br></br>
    <Lifting/>
    <hr></hr>
    <Updateojb/>
    <br></br>
    <UpdateArray/>
    <br></br>
    <UseactionState/>
    <br></br>
    <Userform/>
    <hr></hr>
    <Userform/>
    <hr></hr>
    <Fragment1/>
    <hr></hr>
      
    <div style={{backgroundColor:"yellow", color: "red", padding: 10}}>
    {/* hame ab data aha se lena hai  */}
    <SubjectContext.Provider value={subject}>  {/** koi vi dumy data dal sakte ho waha app defalft data dale the  */}
      <select value={subject} onChange={(event)=>setsubject(event.target.value)}> {/**satae update then ye vi change ho jaygi update ho jaygi  */}
        <option value= "">Select subject</option>
        <option value= "Math">Math</option>
        <option value= "History">history</option>
        <option value= "English">English</option>
      </select>
      <h1>Context Api</h1>   {/* */}
      <button onClick={()=>setsubject('')}>clear Subject</button>
      <College2/>
    </SubjectContext.Provider>
    <hr></hr>
    </div>
    {/* about custom hooks put here */}
    
    <button onClick={toggleValue}>Toggle heading</button>
    <button onClick={()=>toggleValue(false)}>Hide heading</button>
    <button onClick={()=>toggleValue(true)}>Show heading</button>

    { 
    value?<h1>Custom hooks heading</h1>:null
     } {/**agar value true hai to dikhe nahi to null nahi dikhe  */}
    


    </div>

    
  
    
    
  )
}

export default App










