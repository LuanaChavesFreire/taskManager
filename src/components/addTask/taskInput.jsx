import { useState } from "react";
import "./style.css";

function TaskInput({ addTask }) {
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  console.log(tittle, description);
  return (
    <div className="bg-c3 al p-6 rounded-2xl space-y-2 shadow flex flex-col my-4">
      <input
        type="text"
        placeholder="task tittle"
        className="text-c4 border border-c5 outline-c1 bg-white px-4 py-2 rounded-md"
        value={tittle}
        onChange={(event) => setTittle(event.target.value)}
      ></input>

      <input
        type="text"
        placeholder="task description"
        className="text-c4 border border-c5 outline-c1 bg-white px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button
        onClick={() => {
          addTask(tittle, description);
          setTittle("");
          setDescription("");
        }}
        className="bg-c4"
      >
        Add
      </button>
    </div>
  );
}

export default TaskInput;
