import React, { useState } from 'react'



const ColorPicker = (props) => {

  

  let colorHandler = (e) => {
    props.setColor(e.target.value)
  }



  return (
    <div className='flex flex-col items-center gap-4 ' >
      <h1 className='title text-3xl inline '>Color Picker</h1>
      <div className="colorBox w-64 h-64 rounded-2xl p-4 flex items-center justify-center border" onClick={props.copy} style={{backgroundColor: props.color}}>

        <p className=''>Selected color: <span>{props.color}</span></p>

      </div>
      <label htmlFor="picker">Pick the color 👇</label>
      <input type="color" onChange={colorHandler} name="" id="picker" />
    </div>
  )
}

export default ColorPicker