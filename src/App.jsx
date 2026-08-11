import React, {useState} from 'react'

const App = () => {
  let [cars, setCars] = useState([])
  let [year, setYear] = useState('')
  let [brand, setBrand] = useState('')
  let [model, setModel] = useState('')

  let handleYear = (event) => {
    setYear(event.target.value)
  }

  let handleBrand = (event) => {
    setBrand(event.target.value)
  }

  let handleModel = (event) => {
    setModel(event.target.value)
  }

  let handleAddCar = () => {
    let newCar = {
      year: year,
      brand: brand,
      model: model
    }
    setCars(c => ([...c, newCar]))

  }
console.log(cars)
  return (
    <div>
      <h1>lst of cars:</h1>

      <ul>
        {cars.map((car, index) => <li key={index}>{`${car.year} ${car.brand} ${car.model}`}</li>)}
      </ul>

      <div action="">
        <input 
        onChange={(e) => {handleYear(e)}}

        id='year' 
        placeholder='year'  
        className='border' 
        type="text" />

        <br />

        <input 
        onChange={(e) => {handleBrand(e)}}
        id='brand' 
        placeholder='brand'  
        className='border' 
        type="text" />

        <br />

        <input 
        onChange={(e) => {handleModel(e)}}
        id='model' 
        placeholder='model' 
        className='border'  
        type="text" />

        <button className='border' onClick={handleAddCar}>Add</button>
      </div>
    </div>
  
  )
}

export default App