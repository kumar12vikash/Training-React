import { useState } from "react";

//usetoogle name se function lena hai 2nd phir sate dusre hooks vi use kar sakte ho 
const Togglehooks = (defalftval)=>{
    //predefine hooks ek custom hooks mai use kar sakte hai
const [value , setvalue] = useState(defalftval)
//function make it 
function toggleValue (val){
    //9,k,.console.log(val);
    
if(typeof val != 'boolean'){
    console.log('if');
    
    setvalue(!value)  //agar boolean value nhai ayga to negative karke dal do 
}else{
    console.log('else');
    
    setvalue(val) //true false batyga 
}
}
return [value, toggleValue]  //bhejna hai passs kar diye 
}
export default Togglehooks;