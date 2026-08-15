import React, {useState} from 'react'

const App = () => {
  let [cars, setCars] = useState([]);
  let [year, setYear] = useState('');
  let [brand, setBrand] = useState('');
  let [model, setModel] = useState('');
  

  let handleYear = (event) => {
    setYear(event.target.value)
  }
  let handleBrand = (event) => {
    setBrand(event.target.value)
  }
  let handleModel = (event) => {
    setModel(event.target.value)
  }
  

  let handleAdd = () => {
    let newCar = {
      year: year,
      brand: brand,
      model: model
    }
    setCars(c => ([...c, newCar]))
  }

  let handleRemover = (e) => {
    setCars(cars.filter((_, i) => (i !== e)))
  }
  
  return (
    <div>
      List of cars:
      <ul>
        {cars.map((car, index) => (<li onClick={() => {handleRemover(index)}} key={index}>{car.year} {car.brand} {car.model} </li>))}
      </ul>
      <input type="number" id='year' placeholder='year' onChange={(e) => {handleYear(e)}}/>
      <input type="text" id='brand' placeholder='brand' onChange={(e) => {handleBrand(e)}}/>
      <input type="text" id='model' placeholder='model' onChange={(e) => {handleModel(e)}}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default App