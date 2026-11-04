import React, { useState } from 'react'

const App = () => {

    let [tasks, setTasks] = useState(['clean your room', 'do homework'])

    let handleAdd = () => {
        let input = document.getElementById('inp').value
        document.getElementById('inp').value = ''
        setTasks([...tasks, input])
    }

    lt handleDelete = () => {
        
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
                <button className='bg-red-600 cursor-pointer' onClick={}>delete</button>
                <button className='bg-blue-600 cursor-pointer'>👆</button>
                <button className='bg-blue-600 cursor-pointer'>👇</button>
                </li>)}
            </ul>
        </div>
    )
}

export default App