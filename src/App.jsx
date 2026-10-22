import React, {useState} from 'react'


const App = () => {
  let arr = ['coconut', 'pineapple', 'apple', 'banan']
  let [fruit, setFruit] = useState(arr)

  

  return (
    <div>
      <ul>
        {arr.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <input type="text" />
    </div>
  )
}

export default App