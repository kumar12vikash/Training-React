import Student from "./Studen";

const College = ({ college }) => {
  return (
    <div
      style={{
        backgroundColor: "#ccc",
        padding: "20px",
        borderBottom: "2px solid #000",
        margin: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>college:{college.name}</h1>
      <ul>
        <li>
          <h3> website:{college.website}</h3>
        </li>
        <li>
          <h3>loction:{college.location}</h3>
        </li>
        <li>
        <h1>students</h1>
        <Student student={college.student}/> 
        </li>
      </ul>
    </div>
  );
};
export default College;
