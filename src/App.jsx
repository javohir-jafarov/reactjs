import React, {useState} from 'react'

let [car, setCar] = useState({year: 2024,
                              brand: 'Ford', 
                              model: 'mustang'})

const App = () => {
  return (
    <div>
      <p>Your favourite Car: {car.year} {car.braand} {car.model} </p>

      <input type="number" value={car.year}/>
      <input type="text" value={car.brand}/>
      <input type="text" value={car.model}/>
    </div>
  )
}

export default App