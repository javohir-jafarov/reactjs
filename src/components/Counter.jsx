import React from 'react'
import Button from './Button'

let num = 12

const increase = () => {h1.props.children = num += 1}
const decrease = () => {num--}
const reset = () => {num = 0}

const buttonObj = [
    {func: decrease,id: 1, name: '-'},
    {func: reset,id: 2, name: 'reset'},
    {func: increase,id: 3, name: '+'}
]

let h1 = <h1>{num}</h1>

const Counter = () => {
    return (
        <div className=''>
            {h1}
            <div className="action flex gap-5">
                {buttonObj.map(btnItem => <Button func={btnItem.func} id={btnItem.id} name={btnItem.name}/>)}
            </div>
        </div>
    )
}

export default Counter