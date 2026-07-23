import React, {useState} from 'react'

const MyComponent = () => {

    let [name, setName] = useState('Javohir')
    let [age, setAge] = useState(0)
    let [isEmployed, setIsEmployed] = useState(true)

    let updateName = () => {
        setName(name = 'Spongabob')
    }

    let incrementAge = () => {
        setAge(age + 1)
    }
    let employed = () => {
        setIsEmployed(!isEmployed)
    }




  return (
    <>
         <p>name: {name}</p>
         <p>age: {age}</p>
         <p>isEmployed:   {isEmployed ? 'yes' : 'no'}</p>
         <button onClick={updateName} className='border p-2 px-4 bg-emerald-500 rounded-2xl cursor-pointer'>set Name</button>
         <button onClick={incrementAge} className='border p-2 px-4 bg-emerald-500 rounded-2xl cursor-pointer'>increment Age</button>
         <button onClick={employed} className='border p-2 px-4 bg-emerald-500 rounded-2xl cursor-pointer'>employed</button>
    </>
  )
}

export default MyComponent