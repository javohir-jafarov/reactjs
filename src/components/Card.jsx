import React from 'react'

const Card = (props) => {
  return (
    <div key={props.key} className='flex flex-col min-w-20 border h-fit'>
        <h1 className='name inline'>{props.name}</h1>
        <p className='age inline'>{props.age}</p>
    </div>
  )
}

export default Card