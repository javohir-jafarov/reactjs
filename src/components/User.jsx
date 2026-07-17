import React from 'react'

const userName = 'Javohir'

let isUserLogged = false

const User = () => {
  return (
    <div className='underline'>{isUserLogged && `Salom ${userName}`}</div>
  )
}

export default User