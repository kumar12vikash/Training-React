  const Reuse =  ({data})=> {
                return(
                    <div  style={{
                       border: "1px solid green",
                       padding: "10px",
                       margin: "10px",
                       width: "400px",
                       borderRadius: "10px" }}>
                         <h3>id:<span style={{color:"green"}}>{data.id}</span></h3> 
                        <h2>Name:<span style={{color:"green"}}>{data.name}</span></h2>
                        <h4>Age:<span style={{color:"green"}}>{data.age}</span></h4>
                        <h5>email:<span style={{color:"green"}}>{data.email}</span></h5>  
                    </div>                  
                )
            }
     export default Reuse; 