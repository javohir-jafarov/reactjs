import React, {useState} from 'react'
import Button from './Button'

const buttons = [
    {id: 1, textContent: '-'},
    {id: 2, textContent: 'reset'},
    {id: 3, textContent: '+'},
]

const Counter = () => {
  return (
    <div className='counterApp rounded-2xl flex flex-col items-center border w-100 mx-auto h-100 justify-around'>
        <p className='text-5xl'>{0}</p>
        <div className="buttons px-1 gap-1 w-1/1 flex items-center justify-around">
                    {buttons.map(item => <Button  innerText={item.textContent} id={buttons.id}/>)}
        </div>
    </div>
  )
}

export default Counter