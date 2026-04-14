//function Props({name, age, email}){
    
function Props ({ user }){

    return(
        <div>
         <hr></hr>
            <h1>fully details about props </h1>
           {/* <h1>name:{name}</h1>
            <h3>email: {email}</h3>
            <h3>age:{age}</h3> */}
            <h1>name : {user.name}</h1>
            <h2> age:{user.age}</h2>
            <h3>email: {user.email}</h3>
            <hr/>
            
            
        </div>
    )
}

export default Props;