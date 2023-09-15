import { useState } from "react";
import SergiuPage from "../Pages/SergiuPage";

const Acordeon = () => {
  const [expand, setExpand] = useState(false);
  const toggleExpand = () => setExpand((prevExpand) => !prevExpand);
  console.log(expand);
  return (
    <div className="acordeon">
      <button onClick={toggleExpand}>
        Membrii Proiectului <span>{expand ? "-" : "+"}</span>{" "}
      </button>
      {expand && (
        <a href="home">
          <button className="content">Kitchen Guru</button>
        </a>
      )}
      {expand && (
        <a href="sergiu">
          <button className="content">Dimbitchi Sergiu</button>
        </a>
      )}
    </div>
  );
};

export default Acordeon;
