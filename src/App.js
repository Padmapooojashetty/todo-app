import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const addOrUpdateTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = task;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      
      setTasks([...tasks, task]);
    }

    setTask("");
  };

 
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h2>To Do App</h2>

      <div className="input-box">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={addOrUpdateTask}>
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}
            <div>
              <button
                onClick={() => editTask(index)}
                style={{ marginRight: "6px" }}
              >
                ✏️
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTask(index)}
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
