import React, {useState} from 'react'

const App = () => {
  let [foods, setFoods] = useState(['Apple', 'Banana', 'mango'])

  let handleAddFood = () => {

  }

  let handleRemoveFood = () => {
    
  }
  return (
    <div>

      <h1>List of foods:</h1><br />
      <ul>
        {foods.map((food, index)=> <li>{food}</li>)}
      </ul>

    </div>
  )
}

export default App