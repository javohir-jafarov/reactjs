import React, { useState } from 'react'

const App = () => {

    let [tasks, setTasks] = useState(['clean your room', 'do homework'])

    let handleAdd = () => {
        let input = document.getElementById('inp').value
        if (input !== '') {
            setTasks([...tasks, input])
        }
        document.getElementById('inp').value = ''
    }

    let handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index ))
    }

    return (
        <div>
            <h1>To Do:</h1>
            <div className="form">
                <input type="text" id='inp'/>
                <button onClick={handleAdd}>Add</button>
            </div>
            <ul className='flex flex-col'>
                {tasks.map((item, index) => <li className='border gap-2 items-center flex justify-between  w-fit h-8' key={index}><span>{item}</span> 
                <button className='bg-red-600 cursor-pointer' onClick={() => {handleDelete(index)}}>delete</button>
                <button className='bg-blue-600 cursor-pointer'>👆</button>
                <button className='bg-blue-600 cursor-pointer'>👇</button>
                </li>)}
            </ul>
        </div>
    )
}

export default App