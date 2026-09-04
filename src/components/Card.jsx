import React from 'react'

const Card = (props) => {
  return (
    <div className='flex flex-col min-w-20 border h-fit'>
        <h1 className='name'>{props.name}</h1>
        <p className='age'>{props.age}</p>
    </div>
  )
}

export default Cardfirst