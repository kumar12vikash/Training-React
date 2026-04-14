function Login(){
   // alert(sum(30));
    const name = "first jsx of code ";
    let x=10;
    let y=20
    function fruit(){
        return "apple"
    }
    function sum (a,b){
      return a+b;
    }
 
function operation (a,b, op){
    
    if(op== "+"){
        return a+b;
    }else if (op=="-"){
        return a-b;
    }else{
        return a*b;
    }
    

}

const UserObj = {
    name: "vikash",
    age:24,
    email: "kumar399067@gmail.com"
}
 
const arryofuser = ['sam', 'im', 'happy with']

    return(
             <div>
            <h1>user login</h1>
            {name?name:"user not found"}
            {x+y}<br/>
            {fruit()}<br/>
            {sum(10,20)}<br/>
            {operation(10,100 , "")}
            <h2>{UserObj.age}</h2>
            <h5>{arryofuser[0]}</h5>

            
            

        </div>
    )
}

//export const username = 'vikash';
 export function Register(){   //this is named exports 
    return(
        <div>
            <h2>user registration </h2>
            <button onClick={()=>alert("successful")}>clicked</button>
           {/* ise ham varibale mai vi pass kar sakte hai {username}*/} 
        </div>
    )
   
}
  //unction sum(){
   // return 10+20;
//} 

export function From(){

return(
    <div>
        <input type="text" placeholder="input here"></input>
        {8*8}
        <button onClick={()=>alert("input successful")}>form click</button>
    </div>
)
}
//export default Register  you can export only once at a time 

export default Login;   //defult exports called as 