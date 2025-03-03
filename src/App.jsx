// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <h1>App</h1>
//       </div>
//   )
// }
// export default App

import { useState } from "react";
import "./App.css";
import autoprefixer from "autoprefixer";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  // const [isdone, setIsDone] = useState(false)


  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completedTask = () => {
alert('item completed');
// document.getElementById('done').display = 'block';
  }


  return (
    <div className="todo-container" style={{backgroundColor: 'whiteSmoke', width: '70%', margin: '0 auto', marginTop: '20vh', border: '1px solid black', borderRadius: '2%'}}>
      <h1 className="text-light" style={{textAlign: 'center', fontFamily: 'sans-serif'}}>Todo List</h1>
      <div className="input-container" style={{margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          style={{width: '60%', padding: '1%'}}
          autoComplete="Yes"
        />
        <button onClick={addTask} style={{backgroundColor: 'lightblue'}}>Add</button>
      </div>
      <ul style={{marginTop: '8%'}}>
        {tasks.map((task, index) => (
          <li key={index} style={{margin: '0 auto', marginTop: '3%', display: 'flex', justifyContent: 'center', fontFamily: 'cursive', fontSize: '19px', margin: '5px'}}>
            {task}
            {/* <button className="delete-btn" >
              ✖
            </button> */}
        <img src="../icons8-delete-24.png" alt="delete-icon" onClick={() => removeTask(index)} style={{marginLeft: '15px', height: '25px'}} />
        <img src="../icons8-tick-48.png" alt="completed-icon" onClick={() => completedTask ()} style={{marginLeft: '15px', height: '25px'}} />
        
          </li>
        ))}
      </ul>
    </div>
  );
}