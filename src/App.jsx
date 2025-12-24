import { useState } from "react";
import AddTask from "./components/addTask/addTask.jsx";
import TaskList from "./components/taskList/taskList.jsx";

function App() {
  let [tasks, setTasks] = useState([
    {
      id: 1,
      tittle: "first task",
      description: "this is my first task",
      completed: false,
    },
    {
      id: 2,
      tittle: "second task",
      description: "this is my second task",
      completed: false,
    },
    {
      id: 3,
      tittle: "third task",
      description: "this is my third task",
      completed: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTask = tasks.map((tasks) => {
      if (tasks.id === taskId) {
        return{...tasks, completed: !tasks.completed}
      }
      return tasks;
    });
    setTasks(newTask)
  }
  return (
    <>
      <div>
        <h1 className="">Task Menager</h1>
        <div>
          <AddTask />
          <TaskList tasks={tasks} onTaskClick={onTaskClick} />
        </div>
      </div>
    </>
  );
}

export default App;
