import React, {useState} from 'react'

const App = () => {
  let [foods, setFoods] = useState(['Apple', 'Somsa', 'Taco'])

  let handleAddFood = () => {
        let inputFood = document.getElementById('inputFood').value
        document.getElementById('inputFood').value = ''
        setFoods(f => ([...f, inputFood]))
  }
  return (
    <div>

      <h1>List of Foods:</h1>

      <ul>
        {foods.map((food, index, arr) => <li key={index}>{food}</li>)}
      </ul>

      <input type="text" id='inputFood' placeholder='Enter food' />
      <button onClick={handleAddFood}>Add</button>
      

    </div>
  )
}

export default App