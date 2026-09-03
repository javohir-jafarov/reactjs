import React, {useState} from 'react'

const App = () => {
  let [count, setCount] = useState(0)
  return (
    <div>
      <h1 className='text-5xl'>{count}</h1>
        <div className='btns flex gap-4'>
          <button onClick={() => {setCount(c => c + 1)}}>+</button>
          <button onClick={() => {count !== 0 && setCount(c => c - 1)}}>-</button>
          <button onClick={() => setCount(0)}>reset</button>
        </div>
    </div>
  )
}

export default App