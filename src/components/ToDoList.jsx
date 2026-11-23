import React, { useState } from 'react'

const ToDoList = () => {

  let [tasks, setTasks] = useState(['clean room', 'play GTA VI', 'get some cookies'])
  let [newTask, setNewTask] = useState('')




  return (
    <div>
      <h1>ToDo List</h1>
      .
      <ol className='flex flex-col gap-5'>
        {tasks.map((item, index) =>

          <li
            className='flex gap-5 border px-1'
            key={index}
            
          ><span className='text-center flex-1'>{item}</span>
          <button className='bg-red-600 text-white cursor-pointer'>delete</button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default ToDoList