import React, { useState } from 'react'



const ColorPicker = () => {

  let [color, setColor ] = useState('#ffffff')

  let colorHandler = (e) => {
    setColor(e.target.value)
  }

  return (
    <div className='flex flex-col items-center gap-4' >
      <h1 className='title text-3xl inline '>Color Picker</h1>
      <div className="colorBox w-64 h-64 rounded-2xl p-4 flex items-center justify-center border" style={{backgroundColor: color}}>

        <p className=''>Selected color: <span>{color}</span></p>

      </div>
      <label htmlFor="picker">Pick the color 👇</label>
      <input type="color" onChange={colorHandler} name="" id="picker" />
    </div>
  )
}

export default ColorPicker