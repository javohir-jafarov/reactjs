import React, {useState} from 'react'
import Button from './Button'





const Counter = () => {

    const buttons = [
    {id: 1, textContent: '-', func: () => decrement()},
    {id: 2, textContent: 'reset', func: () => reset()},
    {id: 3, textContent: '+', func: () => increment()},
]


    let decrement = () => {
        setNum(num - 1)
    }

    let reset = () => {
        setNum(num = 0)
    }
    let increment = () => {
        setNum(num + 1)
    }



    let [num, setNum] = useState(0)
  return (
    <div className='counterApp rounded-2xl flex flex-col items-center border w-100 mx-auto h-100 justify-around'>
        <p className='text-5xl'>{num}</p>
        <div className="buttons px-1 gap-1 w-1/1 flex items-center justify-around">
                    {buttons.map(item => <Button  innerText={item.textContent} id={item.id} func={item.func}/>)}
        </div>
    </div>
  )
}

export default Counter