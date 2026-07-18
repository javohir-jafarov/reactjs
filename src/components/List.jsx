import React from 'react'

let fruits = [
  {id: 1,name: 'apple', cal: 95},
  {id: 2,name: 'banana', cal: 159},
  {id: 3,name: 'cherry', cal: 105},
  {id: 4,name: 'coconut', cal: 115},
  {id: 5,name: 'pineapple', cal: 97},
]

fruits.sort()

let ListedFruits = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;{fruit.cal}</li>)


const List = () => {
  return (
    <>
      <ul>{ListedFruits}</ul>
    </>
  )
}

export default List