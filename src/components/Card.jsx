import React from 'react'

const Card = (props) => {
  return (
    <div key={props.key} className='flex flex-col max-w-40 min-w-20 border h-fit'>
        <h1 className='name '>{props.name}</h1>
        <p className='age '>{props.age}</p>
        <button className="delete bg-red-600 text-white cursor-pointer" onClick={props.delete}>Delete</button>
    </div>
  )
}

export default Card