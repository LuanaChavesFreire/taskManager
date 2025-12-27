import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, Check, Trash } from "lucide-react";
import Button from "./button";

function TaskList({tasks, onTaskClick, delTask}) {
  const navigate = useNavigate()
  function seeDetails(tasks) {
    const query = new URLSearchParams()
    query.set('title', tasks.title)
    query.set('description', tasks.description)
    navigate(`/task?${query.toString()}`)
  }

  return (
    <ul className="w-125 bg-c3 al p-4 rounded-2xl space-y-2 shadow">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            className={`bg-c4 w-100 text-c2 p-2 rounded-md text-left ${tasks.completed && 'line-through'}`}
            onClick={() => onTaskClick(tasks.id)}
          >
            {tasks.title}
          </button>

          <Button onClick={() => delTask(tasks.id)}>
            <Trash />
          </Button>

          <Button onClick={() => seeDetails(tasks)}>
            <ChevronRightIcon />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
