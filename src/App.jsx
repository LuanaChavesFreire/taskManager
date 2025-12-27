import { useEffect, useState } from "react";
import { v4 } from "uuid";
import TaskInput from "./components/taskInput.jsx";
import TaskList from "./components/taskList.jsx";

function App() {
  let [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // just a possobility to fetch tasks from an external API
  // useEffect(() => {
  //   async function fetchTask() {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       { method: "GET" }
  //     );
  //     const data = await response.json();
  //     console.log(data);
  //     setTasks(data);
  //   }
  //   fetchTask();
  // }, []);

  function onTaskClick(taskId) {
    const newTask = tasks.map((tasks) => {
      if (tasks.id === taskId) {
        return { ...tasks, completed: !tasks.completed };
      }
      return tasks;
    });
    setTasks(newTask);
  }

  function delTask(taskId) {
    const newTaskList = tasks.filter((tasks) => tasks.id !== taskId);
    setTasks(newTaskList);
  }

  function addTask(title, description) {
    if (!title.trim() || !description.trim()) {
      return alert("Please fill all the fields properly");
    }
    const newTask = {
      id: v4(),
      title,
      description,
      complested: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1>Task Manager</h1>
        <div>
          <TaskInput tasks={tasks} addTask={addTask} />
          <TaskList tasks={tasks} onTaskClick={onTaskClick} delTask={delTask} />
        </div>
      </div>
    </>
  );
}

export default App;
