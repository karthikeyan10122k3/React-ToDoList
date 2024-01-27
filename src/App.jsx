import { useState } from "react";
import "./App.css";
import { Task } from "./Task.jsx";

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const inputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addNewTask = () => {
    const inputValue = document.getElementsByClassName("input");
    if (toDoList.some((task) => task.taskName === newTask)) {
      alert("Task already present!");
    } else if (newTask === "") {
      alert("Enter Task!");
    } else {
      const task = {
        id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
        taskName: newTask,
        isTaskCompleted: false,
      };
      setToDoList([...toDoList, task]);
    }
  };

  const removeTask = (id) => {
    const newToDoList = toDoList.filter((task) => task.id !== id);
    setToDoList(newToDoList);
  };

  const completedTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) return { ...task, isTaskCompleted: true };
        else return task;
      })
    );
  };

  return (
    <div className="App ">
      <h1 className="heading">To Do List</h1>
      <div className="addTask">
        <input type="text" className="input" onChange={inputChange} />
        <button className="add" onClick={addNewTask}>
          Add Task
        </button>
      </div>

      <div className="list">
        {toDoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.isTaskCompleted}
              removeTask={removeTask}
              completedTask={completedTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
