import { useState } from "react";
import {v4} from "uuid";
import TaskInput from "./components/addTask/taskInput.jsx";
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

  function delTask(taskId) {
    const newTaskList = tasks.filter(tasks => (tasks.id !== taskId));
    setTasks(newTaskList);
  }

  function addTask(tittle, description) {
          if (!tittle.trim() || !description.trim()) {
            return alert("Please fill all the fields properly");
          }
    const newTask = {
      id: v4(),
      tittle,
      description,
      complested: false,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1>Task Menager</h1>
        <div>
          <TaskInput tasks={tasks} addTask={addTask} />
          <TaskList tasks={tasks} onTaskClick={onTaskClick} delTask={delTask} />
        </div>
      </div>
    </>
  );
}

export default App;
