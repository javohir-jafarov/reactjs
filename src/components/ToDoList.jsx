import React, { useState } from 'react'

const ToDoList = () => {

  let [tasks, setTasks] = useState(['clean room', 'play GTA VI', 'get some cookies'])
  let [newTask, setNewTask] = useState('')

  let handleInpChange = (event) => {
    setNewTask(event.target.value)
    console.log(newTask)
  }

  let handleAdd = (event) => {
    console.log(newTask)
  }


  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-center'>ToDo List</h1>
      <div className="input flex gap-1 justify-center">
        <input type="text" value={newTask} onChange={() => { handleInpChange(event) }} id='inp' className='border' />
        <button className='border px-5' onClick={() => { handleAdd(event) }}>add</button>
      </div>
      <ol className='flex flex-col gap-5 border'>
        {tasks.map((item, index) =>

          <li
            className='flex gap-5 border px-1 max-w-75'
            key={index}

          ><span className='text-center flex-1'>{item}</span>
            <button className='bg-red-600 text-white cursor-pointer' onClick={() => { console.log(index) }}>delete</button>
          </li>
        )}
      </ol>
    </div>
  )
}

export default ToDoList