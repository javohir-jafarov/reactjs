import React, {useState} from 'react'

const App = () => {
  let [foods, setFoods] = useState(['Mango', 'Banana', 'Apple']);

  let handleAddFood = () => {
    let foodInput = document.getElementById('foodInput').value
    document.getElementById('foodInput').value = ''
    setFoods(f => ([...f, foodInput]))
  }

  let handleRemoveFood = (e) => {
    setFoods(f => f.filter((_, i) => i !== e))
  }

  return (
    <div>
      <h1>List of foods:</h1>
      <br />
      <ul>
        {foods.map((food, index) => <li onClick={() => {handleRemoveFood(index)}} key={index}>{food}</li>)}
      </ul>
      <input type="text" id='foodInput'/> <button onClick={handleAddFood}>Add</button>
    </div>
  )
}

export default App