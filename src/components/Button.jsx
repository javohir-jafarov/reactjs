import React from 'react'

const Button = (props) => {
  return <button onClick={props.func} key={props.id}>{props.name}</button>
  
}

export default Button