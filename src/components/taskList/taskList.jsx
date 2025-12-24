import "./style.css";
import { ChevronRightIcon, Check } from "lucide-react";

function TaskList(props) {
  return (
    <ul className="bg-c3 al p-6 rounded-2xl space-y-2 shadow">
      {props.tasks.map((tasks) => (
        <li key={tasks.id} className="flex gap-2">
          <button
            className={`bg-c4 w-100 text-c2 p-2 rounded-md text-left ${tasks.completed && 'line-through'}`}
            onClick={() => props.onTaskClick(tasks.id)}
          >
            {tasks.tittle}
          </button>

          <button className="bg-c4 text-c2 p-2">
            <ChevronRightIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
