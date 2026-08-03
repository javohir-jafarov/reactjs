import React, {useState} from 'react'

const App = () => {

  let [car, setCar] = useState({
    year: 2024,
    brand: 'Ford',
    model: 'Mustang'
  })

  let yearHandler = (e) => {
    setCar(prevCar => ({...prevCar, year: e.target.value}))
  }

  let brandHandler = (e) => {
    setCar(prevCar => ({...prevCar, brand: e.target.value}))
  }

  let modelHandler = (e) => {
    setCar(prevCar => ({...prevCar, model: e.target.value}))
  }

  return (
    <div>

      <p>Your favourite car: {car.year} {car.brand} {car.model}</p>
        <input type="text" name="" id="" value={car.year} onChange={yearHandler}/>
        <input type="text" name="" id="" value={car.brand} onChange={brandHandler}/>
        <input type="text" name="" id="" value={car.model} onChange={modelHandler}/>
    </div>
  )
}

export default App