import React from 'react'

const Button = (props) => {
  return <button key={props.id} onClick={props.func} className='w-1/3 h-2/1 cursor-pointer text-2xl rounded-[10px] bg-emerald-400 '>{props.innerText}</button>
}

export default Button