
import React from 'react'

let num = 0

const buttonObj = [
    {id: 1, name: '-'},
    {id: 2, name: 'reset'},
    {id: 3, name: '+'}
]

const Counter = () => {
    return (
        <div className=''>
            <h1>{num}</h1>
            <div className="action flex gap-5">
                
            </div>
        </div>
    )
}

export default Counter