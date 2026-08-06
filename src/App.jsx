import React, {useState} from 'react'

const App = () => {
  let [fruits, setFruits] = useState(['apple', 'Banana', 'coconut'])

  let handleAdd = () => {
    let fruit = document.getElementById('fruitInput').value
    document.getElementById('fruitInput').value = ''
    setFruits(f => ([...f, fruit]))
  }

  let handleRemove = (e) => {
    setFruits(fruits.filter((_, i) => i !== e) )
  }
  return (
    <div>
      <h1>List of Foods: </h1>
      <ul>
        {fruits.map((fruit, index) => <li onClick={() => {handleRemove(index)}} key={index}>{fruit}</li>)}
      </ul>
      <input type="text" id='fruitInput' placeholder='Enter...'/> <button onClick={handleAdd}>Add</button>

    </div>
  )
}

export default App