//let count = 0;  //error dega or bhut sare number store karne ko dege so isliye ham ise 
function Pureim(){

    return(
        <div>
            <h1>about pure and impure componets</h1>
            <Counter count={0}/>
            <Counter count={1}/>
            <Counter count={2}/>

        </div>
    )


}

 const Counter = ({count}) =>{  //aha is tara {count kar doge to err dege }
        count = count+1    //aise karne se random number mount sate impure components se hota hai 
        return(
            <div>
                <h2> counter {count}</h2>
            </div>
        )
    }
export default  Pureim;