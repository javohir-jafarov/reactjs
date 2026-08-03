import React, {useState} from 'react'



const App = () => {

  let [car, setCar] = useState({year: 2024,
                              brand: 'Ford', 
                              model: 'mustang'})

  let handleYearChange = (event) => {
    setCar(prevCar => ({...prevCar, year: event.target.value}))
  }

  let handleBrandChange = (event) => {
    setCar(prevCar => ({...prevCar, brand: event.target.value}))
  }

  let handleModelChange = (event) => {
    setCar(prevCar =>({...prevCar, model: event.target.value}))
  }

  return (
    <div>
      <p>Your favourite Car: {car.year} {car.brand} {car.model} </p>

      <input type="number" value={car.year} onChange={handleYearChange}/>
      <input type="text" value={car.brand} onChange={handleBrandChange}/>
      <input type="text" value={car.model} onChange={handleModelChange}/>
    </div>
  )
}

export default App