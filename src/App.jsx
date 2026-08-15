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
  let handleRemover = () => {
    
  }

  let handleAdd = () => {
    let newCar = {
      year: year,
      brand: brand,
      model: model
    }
    console.log(cars)
    setCars(c => ([...c, newCar]))
    console.log(cars)
  }

  console.log(year, brand, model)
  
  return (
    <div>
      List of cars:
      <ul>
        {cars.map((car, index) => (<li key={index}>{car}</li>))}
      </ul>
      <input type="number" id='year' placeholder='year' onChange={(e) => {handleYear(e)}}/>
      <input type="text" id='brand' placeholder='brand' onChange={(e) => {handleBrand(e)}}/>
      <input type="text" id='model' placeholder='model' onChange={(e) => {handleModel(e)}}/>
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default App