import React, {useState} from 'react'

const App = () => {
  let [count, setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
        <button>+</button>
        <button>-</button>
        <button>reset</button>
    </div>
  )
}

export default App