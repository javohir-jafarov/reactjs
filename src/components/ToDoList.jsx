import React, {useState} from 'react'

const ToDoList = () => {
    let [tasks, setTasks] = useState(['take shower', 'walk the dog', 'clean your room'])
    let [newTask, setNewTask] = useState('')

    let handleAddTask = () => {
        
    }
    let handleDeleteTask = () => {

    }
    let handleMoveUp = () => {

    }
    let handleMoveDown = () => {
        
    }
  return (
    <div>
        <h1>Todo List:</h1>
        <div className="input">
            <input type="text"  value={newTask} onChange={() => {setNewTask()}}/>
        </div>
        <ol>
            {tasks.map((task, index) => <li key={index}>
                <span>{task}</span>
                <button>delete</button>
            </li>)}
        </ol>
    </div>
  )
}

export default ToDoList