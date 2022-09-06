
import './App.css';
import React, { useState } from 'react'; 

function App() {

  const [tasks, setTasks] = useState([
    {name: "Buy shopping", isCompleted: false},
    {name: "Clean bathroom", isCompleted: false},
    {name: "Clean kitchen", isCompleted: false},
    {name: "Do dusting", isCompleted: false},
    {name: "Replace light bulbs", isCompleted: false},
    {name: "Car's MOT", isCompleted: false},
  ])

  const [newTaskName, setNewTaskName] = useState("")

  const handleTaskNameChange = (e) => {
    setNewTaskName(e.target.value)
  }

  const addNewTaskToList = (e) =>{
    e.preventDefault()
    console.log("the submitting is occurring")
  
 
  const copyTasks = [...tasks]
  copyTasks.push({name: newTaskName, isCompleted: false}) 
  setTasks(copyTasks)

}


const completeTask = (index) => {
  const copyTasks = [...tasks]
  const updatedTask = {...copyTasks[index]}
  updatedTask.isCompleted = true
  copyTasks[index] = updatedTask
  setTasks(copyTasks)
  setNewTaskName("")
}


  const listTasks = tasks.map((task, index) => {
    return(
      <li key={index} className={task.isCompleted ? "completed" : "not-completed" } >
        <span>
          {task.name}
        </span>
        {task.isCompleted ? <span>Completed!</span> 
        : <button onClick={() => completeTask()}>Mark as Completed</button>}
      </li>
    )
  })



  return (
    <div className="App">

      <h1>To Do List</h1>
      <hr></hr>

      <ul>
        {listTasks}
      </ul>

      <form onSubmit={addNewTaskToList}>
        <label htmlFor="new-task-name">Add a new task:</label>
        <input type="text" id="new-task-name" value={newTaskName} onChange={handleTaskNameChange}/>
        <input type="submit" value="Add new item"  />
      </form>
 

    </div>
    
  );
  }

export default App;
