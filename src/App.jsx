import React, {useState} from 'react'

const App = () => {
  let [cars, setCars] = useState([])
  let [year, setYear] = useState('')
  let [brand, setBrand] = useState('')
  let [model, setModel] = useState('')

  let handleYear = (event) => {
    setYear(event.target.value)
    console.log(event.target.value)
  }

  let handleBrand = (event) => {
    
  }

  let handleModel = (event) => {
    
  }

  let handleAddCar = () => {
    
  }

  return (
    <div>
      <h1>lst of cars:</h1>

      <div action="">
        <input 
        onChange={(e) => {handleYear(e)}}

        id='year' 
        placeholder='year'  
        className='border' 
        type="text" />

        <br />

        <input 

        id='brand' 
        placeholder='brand'  
        className='border' 
        type="text" />

        <br />

        <input 

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