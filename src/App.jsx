import React, { useState } from 'react'

const App = () => {
  let [cars, setCars] = useState([
    { year: 2004, brand: 'honda', model: 'civic' },
    { year: 2024, brand: 'chevrolet', model: 'malibu' }
  ])



  let handleAdd = () => {
    let year = document.getElementById('year').value
    let brand = document.getElementById('brand').value
    let model = document.getElementById('model').value
    
    setCars([...cars,
    {
      year: year,
      brand: brand,
      model: model
    }
    ])

    document.getElementById('year').value = ''
    document.getElementById('brand').value = ''
    document.getElementById('model').value = ''
  }
  return (
    <div>
      <ul>
        {cars.map((item, index) => <li key={index}>{item.year} {item.brand} {item.model}</li>)}
      </ul>

      <div action="">
        <input type="number" name="" id="year" />
        <input type="text" name="" id="brand" />
        <input type="text" name="" id="model" />

        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  )
}

export default App