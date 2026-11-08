import React from 'react'

const MoveButton = (props) => {
  return (
    <button className='bg-blue-700' onClick={props.move}>{props.hand}</button>
  )
}

export default MoveButton