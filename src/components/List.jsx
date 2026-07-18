import React from 'react'

let fruits = [{id: 1,name: 'apple', cal: 95},
              {id: 2,name: 'banana', cal: 159},
              {id: 5,name: 'pineapple', cal: 97},
              {id: 3,name: 'cherry', cal: 105},
              {id: 4,name: 'coconut', cal: 115},]
  

// fruits.sort((a, b) => a.name.localeCompare(b.name)) // alphabetical
// fruits.sort((a, b) => b.name.localeCompare(a.name)) // reverse alphabetical
// fruits.sort((a, b) => a.cal - b.cal) // Numeric
fruits.sort((a, b) => b.cal - a.cal) // reverse Numeric



const ListedFruits = fruits.map(fruit => 

<li key={fruit.id}>
  {fruit.name}:&nbsp;<b>{fruit.cal}</b>
</li>)


const List = () => {
  return (
    <>
      <ul>{ListedFruits}</ul>
    </>
  )
}

export default List