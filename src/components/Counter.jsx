import React, {useState} from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
    let decrement = () => {
        setCount(prevCount => prevCount - 1)
    }

    let reset = () => {
        setCount(prevCount => 0)
    }

    let increment = () => {
        setCount(c => c + 1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <div className="buttons">
            <button onClick={decrement}>-</button>
            <button onClick={reset}>reset</button>
            <button onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default Counter