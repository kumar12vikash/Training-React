import College from "./College";
import Student from "./Studen";

function Nested (){
const collegeData =[
    {
    name: "Iet alwar",
    website:"www.iet.com",
    loction: "Alwar",
    student:[
        {
         name: "vikash sidhu"  ,
         email:"kumar3678@gmail.com",
         college:"Alwar" ,
        }
    ]
    },

    //2nd object of array
      {
    name: "Iet alwar",
    website:"www.iet.com",
    loction: "Alwar",
    student:[
        {
         name: "vikash sidhu"  ,
         email:"kumar3678@gmail.com",
         college:"Alwar" ,
        }
    ]
    },
    //3r object of array
      {
    name: "Iet alwar",
    website:"www.iet.com",
    loction: "Alwar",
    student:[
        {
         name: "vikash sidhu"  ,
         email:"kumar3678@gmail.com",
         college:"Alwar" ,
        }
    ]
    },


]

    return(
        <div>
            {
        collegeData.map((college, index)=>(
            <div key={index}>
                <College college={college}/>
            </div>
        ))
     }

        </div>
    )
}

export default Nested;
