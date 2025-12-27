import { useState } from "react";
import Input from "./input";

function TaskInput({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="w-125 bg-c3 al p-6 rounded-2xl space-y-2 shadow flex flex-col my-4">
      
      <Input
      type='text'
      placeholder='task title'
      value={title}
      onChange={(event) => setTitle(event.target.value)}
      />

      <Input
      type='text'
      placeholder='task description'
      value={description}
      onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          addTask(title, description);
          setTitle("");
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
