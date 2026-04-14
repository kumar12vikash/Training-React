import { useActionState } from "react";

function UseactionState() {
  const handlesumbitbtn = async (lastData, formData) => {
    let name = formData.get("name");
    // console.log(handlesumbitbtn);

    let password = formData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    //console.log("sumbit", name, password);

    //condition
    if (name && password) {
      return { message: "data sumbit", name, password };
    } else {
      return { error: "Enter both filelds", name, password };
    }
  };

  const [data, action, pending] = useActionState(handlesumbitbtn, undefined);
  console.log(data);

  return (
    <div>
      <h1>handle useactionhooks in react 19 with sideeffect</h1>
      <form action={action}>
        <input
          name="name"
          defaultValue={data?.name}
          placeholder="eneter your name"
        ></input>
        <br></br>
        <br></br>
        <input
          name="password"
          defaultValue={data?.password}
          placeholder="enter your password"
        ></input>
        <br></br>
        <br></br>
        <button disabled={pending}>sumbit</button>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}

      <h1>Name: {data?.name}</h1>
      <h1>Password:{data?.password}</h1>
    </div>
  );
}
export default UseactionState;
