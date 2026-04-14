
function Funprops ({username,getuser,name}){ 
    //aha hamko code likhe function koo pass karne mai accha hai main function mai pass kare
    return(
    <div>
        <button onClick={()=> username(name)} >username</button> 
        <button onClick={()=>getuser()}>getuser</button>
    </div>
    ); //if will not return and pass the value inside div then show empty componets 
}
export default Funprops;