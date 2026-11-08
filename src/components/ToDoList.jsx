import React, { useState } from 'react'
import MoveButton from './MoveButton'

const ToDoList = () => {
    let arr = ['take shower', 'walk the dog', 'clean your room']
    let [tasks, setTasks] = useState(arr)
    let [newTask, setNewTask] = useState('')

    let handleInput = (event) => {
        setNewTask(event.target.value)
    }

    let handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks(t => [...t, newTask])
        }
        setNewTask('')
    }
    let handleDeleteTask = (index) => {
        setTasks(t => t.filter((_, i) => index !== i))
    }
    
    let handleMoveUp = (index) => {
        if (index > 0) {
            let updatedItem = [...tasks]
            [updatedItem[index], updatedItem[index - 1]] = [updatedItem[index - 1], updatedItem[index]]
            setTasks(updatedItem)
        }
    }
    let handleMoveDown = () => {

    }
    
    return (
        <div className='text-center flex flex-col gap-5 px-20'>
            <h1>Todo List:</h1>
            <div className="input">
                <input className='border' type="text" value={newTask} onChange={handleInput} />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <ol className='flex flex-col gap-2'>
                {
                tasks.map(
                    (task, index) => 
                <li className='text-center flex border gap-1'
                    key={index}
                    >
                    <span className='flex-1'>{task}</span>

                    <button 
                    className='border bg-red-500' 
                    onClick={() => {handleDeleteTask(index)}}>
                        delete
                        </button>
                        <MoveButton move={() => {handleMoveUp(index)}} hand={'👆'}/>
                        <MoveButton hand={'👇'}/>
                        
                </li>
                )
                }
            </ol>
        </div>
    )
}

export default ToDoList