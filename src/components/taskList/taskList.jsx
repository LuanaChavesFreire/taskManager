import { useNavigate } from "react-router-dom";
import { ChevronRightIcon, Check, Trash } from "lucide-react";

function TaskList({tasks, onTaskClick, delTask}) {
  const navigate = useNavigate()
  function seeDetails(tasks) {
    const query = new URLSearchParams()
    query.set('tittle', tasks.tittle)
    query.set('description', tasks.description)
    navigate(`/task?${query.toString()}`)
  }

  return (
    <ul className="bg-c3 al p-6 rounded-2xl space-y-2 shadow">
      {tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            className={`bg-c4 w-100 text-c2 p-2 rounded-md text-left ${tasks.completed && 'line-through'}`}
            onClick={() => onTaskClick(tasks.id)}
          >
            {tasks.tittle}
          </button>

          <button className="bg-c4 text-c2 p-2" onClick={() => delTask(tasks.id)}>
            <Trash />
          </button>

          <button className="bg-c4 text-c2 p-2" onClick={() => seeDetails(tasks)}>
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
