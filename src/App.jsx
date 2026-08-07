import React, {useState} from 'react'

const App = () => {
  let [foods, setFoods] = useState(['Mango', 'Banana', 'Apple'])
  return (
    <div>
      <h1>List of foods:</h1>
      <ul>
        
      </ul>
      <input type="text" id='foodInput'/> <button>Add</button>
    </div>
  )
}

export default App