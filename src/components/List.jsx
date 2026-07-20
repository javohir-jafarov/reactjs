import React from 'react'

const List = (props) => {

  

  let data = props.data
  
  // data.sort((a, b) => a.name.localeCompare(b.name)); // alphabetical
// data.sort((a, b) => b.name.localeCompare(a.name)) // reverse alphabetical


// data.sort((a, b) => a.cal - b.cal)

// data.sort((a, b) => b.cal - a.cal)


  let itemList = data.map(item => <li key={item.id}>{item.name}: {item.cal}</li>);
  


  return (
    <>
      <ul>
        {itemList}
      </ul>
    </>
  )
}

export default List