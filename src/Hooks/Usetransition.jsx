import { useTransition } from "react";

function Usetransition() {
  const [pending, startTransition] = useTransition();

  const handletransition = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 4000));
    });
  };

  return (
    <div>
      <h1>handle button to set loader then use usetransition</h1>
      {pending ? (
        <img
          style={{ width: "100px" }}
          src="https://tse2.mm.bing.net/th/id/OIP.xvDrMozhxckZCAVNSIVNrQHaHa?pid=Api&P=0&h=180"
          alt="image"
        />
      ) : null}
      <button disabled={pending} onClick={handletransition}>sumbit</button>
    </div>
  );
}
export default Usetransition;
