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
    setBrand('')
    setYear('')
    setModel('')

  }

  let handleRemover = (event) => {
    setCars(c => c.filter((_, i) => i !== event))
  }
  return (
    <div>
      <h1>lst of cars:</h1>

      <ul>
        {cars.map((car, index) => <li onClick={() => {handleRemover(index)}} key={index}>{`${car.year} ${car.brand} ${car.model}`}</li>)}
      </ul>

      <div action="">
        <input 
        onChange={(e) => {handleYear(e)}}

        id='year' 
        placeholder='year'  
        className='border' 
        type="text" value={year}/>

        <br />

        <input 
        onChange={(e) => {handleBrand(e)}}
        id='brand' 
        placeholder='brand'  
        className='border' 
        type="text" value={brand}/>

        <br />

        <input 
        onChange={(e) => {handleModel(e)}}
        id='model' 
        placeholder='model' 
        className='border'  
        type="text" value={model}/>

        <button className='border' onClick={handleAddCar}>Add</button>
      </div>
    </div>
  
  )
}

export default App