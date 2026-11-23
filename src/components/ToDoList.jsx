import React, {useState} from 'react'
import Li from './Li'

const ToDoList = () => {
  
  let [tasks, setTasks] = useState(['clean room', 'play GTA VI', 'get some cookies'])
  let [newTask, setNewTask] = useState('')




  return (
    <div>
        <h1>ToDo List</h1>
        <ol>
          {tasks.map((item, index) => <Li i={index} item={item}/>)}
          
        </ol>
    </div>
  )
}

export default ToDoList