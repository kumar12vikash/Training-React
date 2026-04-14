/* eslint-disable react-hooks/refs */

{/*import { forwardRef } from "react";

const Newref = (props, ref)=>{
    return(
        <div>
            <input type="text" ref={ref} ></input>
        </div>
    )

}
export default forwardRef(Newref); */}

const Newref =(props)=>{
    return(
       <div>
        // eslint-disable-next-line react-hooks/refs
        <input type="text" ref={props.ref} />
       </div>
    )
}
export default Newref;

