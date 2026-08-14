import React, {useState} from 'react'

const App = () => {
  let [cars, setCars] = useState([]);
  let [year, setYear] = useState('');
  let [brand, setBrand] = useState('');
  let [model, setModel] = useState('');

  let handleYear = () => {

  }
  let handleBrand = () => {
    
  }
  let handleModel = () => {
    
  }
  let handleRemover = () => {
    
  }
  
  return (
    <div>
      List of cars:
      <ul></ul>
      <input type="number" id='year' placeholder='year'/>
      <input type="text" id='brand' placeholder='brand'/>
      <input type="text" id='model' placeholder='model'/>
      <button>Add</button>
    </div>
  )
}

export default App