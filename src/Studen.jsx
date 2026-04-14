const Student= ({student})=>{
    return(
       
        <div>
            {
                
                student.map((student)=>(
                    
                    <ul key={student.name}>
                        <li>Name: {student.name}</li>
                         <li>email: {student.email}</li>
                        <li>college: {student.college}</li>
                    </ul>
                ))
            }
        </div>
    )


}
export default Student;