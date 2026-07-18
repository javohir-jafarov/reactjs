import React from 'react'

const List = (props) => {

  const itemList = props.item
  let ListItems = itemList.map(item => <li key={item.id}>{item.name}:&nbsp;{item.cal}</li>)


  return (
    <div>
      <h1 className='text-4xl'>{props.category}</h1>
      <ol>{ListItems}</ol>
    </div>
  )
}

export default List