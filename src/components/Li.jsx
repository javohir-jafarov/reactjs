import React from 'react'

const Li = (props) => {
  return (
    <li key={props.i}>{props.item}</li>
  )
}

export default Li