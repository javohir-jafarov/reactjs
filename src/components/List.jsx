import React from 'react'

const List = (props) => {

  

  let data = props.data
  
  // data.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
// data.sort((a, b) => b.name.localeCompare(a.name)) // reverse alphabetical


// data.sort((a, b) => a.cal - b.cal)

// data.sort((a, b) => b.cal - a.cal)

const lowCalFruit = data.filter(fruit => fruit.cal <= 100)


  let itemList = lowCalFruit.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: {lowCalFruit.cal}</li>);
  


  return (
    <>
      <ul>
        {itemList}
      </ul>
    </>
  )
}

export default List