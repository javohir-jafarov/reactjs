import React from 'react'
import Button from './Button'

const buttons = [
    {id: 1, textContent: '-'},
    {id: 2, textContent: 'reset'},
    {id: 3, textContent: '+'},
]

const Counter = () => {
  return (
    <div>
        {buttons.map(item => <Button innerText={item.textContent}/>)}
    </div>
  )
}

export default Counter