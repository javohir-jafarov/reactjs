import React, {useState} from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Counter