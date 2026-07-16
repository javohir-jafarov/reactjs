import React from 'react'
import profilePic from '../assets/profile.jpg'

const Card = (props) => {
  return (
    <div className='flex items-center border-black border-2 w-36'>
        <img src={profilePic} alt="profile picture" className="profile w-[150px] w-[150px]" />
        <div className="text">
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
    </div>
  )
}

export default Card