import { useEffect } from "react";
const EX1 = ({count, data})=>{

    function handlefunction(){
        console.log('call only')
    }
   

    function handleaboutone(){
        console.log("2nd function cal")
    }
   

    useEffect(() => {
      handlefunction();
    }, [])

    useEffect(()=>{
     handleaboutone();
    },[count, data])

    return(
        <div>
            <h1>conter value : {count}</h1>
            <h2>Data value : {data}</h2>

        </div>
    )

}
export default EX1;

