import { useState } from "react";
//import Color from "./Color";
import Reuse from "./Reuse";

function Controlle() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  return (
    <div>
      <form action="get" method="urlconrolle">
        <input
          type="text"
          value={name}
          placeholder="entername"
          onChange={(event) => setname(event.target.value)}
        ></input>{" "}
        <br></br> <br></br>
        <input
          type="text"
          value={password}
          placeholder="entepassword"
          onChange={(event) => setpassword(event.target.value)}
        ></input>{" "}
        <br></br> <br></br>
        <input
          type="text"
          value={email}
          placeholder="enteremail"
          onChange={(event) => setemail(event.target.value)}
        ></input>{" "}
        <br></br> <br></br>
        <button>sumbit</button>
        <br></br>
        <button
          onClick={() => {
            setname("");
            setpassword("");
            setemail("");
          }}
        >
          clear all
        </button>
        <h1>{name}</h1>
        <h2>{password}</h2>
        <h3>{email}</h3>
      </form>
    </div>
  );
}
//**RADIO or OPERATION IN CHECKBOX */
export function Gender() {
  const [gender, setgender] = useState("female");
  const [city, setcity] = useState("delhi");
  return (
    <div>
      <h1>Drow and radiotik</h1>
      <h4>Select Gender:</h4>
      <input
        type="radio"
        value={"male"}
        onChange={(event) => setgender(event.target.value)}
        checked={gender == "male"}
        name="gender"
        id="male"
      />
      <label htmlFor="male">male</label>
      <input
        type="radio"
        value={"female"}
        onChange={(event) => setgender(event.target.value)}
        checked={gender == "female"}
        name="gender"
        id="female"
      />
      <label htmlFor="female">female</label>
      <h1>Select Gender: {gender}</h1> <br></br>
      <hr></hr>
      <h1>Select City</h1>
      <select
        defaultValue="delhi"
        onChange={(event) => setcity(event.target.value)}
      >
        <option value="delhi">delhi</option>
        <option value="mumbai">mumbai </option>
        <option value="mumbai">kolkata</option>
      </select>
      <h1>select city: {city}</h1>
    </div>
  );
}
//**pass data from arry to jsx with the help of map */
export function Array() {
  // const collgedat = ["iet", "nit",'vip',"git"] //isi acces karne mai react child object arry deta hai
  const Userdata = [
    {
      id: 1,
      name: "anil",
      age: 24,
      email: "kumar3999067@gmail.com",
    },
    {
      id: 2,
      name: "vikash",
      age: 19,
      email: "vikash3999067@gmail.com",
    },
    {
      id: 3,
      name: "show ji",
      age: 34,
      email: "anilshowji@gmail.com",
    },
    {
      id: 4,
      name: "manish",
      age: 30,
      email: "mansih@gmail.com",
    },
  ];
  return (
    <div>
      <h1>pass data with jsx form thrgh map</h1>
      <table border="1">
        <thead>
          <tr>
            <td>id</td>
            <td>name</td>
            <td>age</td>
            <td>email</td>
          </tr>
        </thead>

        <tbody>
          {Userdata.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.age}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr></hr>

      <div>
        <h1>Resuase componets for jsx</h1>
        {Userdata.map((user) => (
          <div key={user.id}>
            <Reuse data={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Controlle;
