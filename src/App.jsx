import react from 'react'
import List from './components/List'

let fruits = [{id: 1,name: 'apple', cal: 95},
              {id: 2,name: 'banana', cal: 159},
              {id: 3,name: 'pineapple', cal: 97},
              {id: 4,name: 'cherry', cal: 105},
              {id: 5,name: 'coconut', cal: 115},]

let vegie = [{id: 6,name: 'carrot', cal: 55},
              {id: 7,name: 'tomato', cal: 129},
              {id: 8,name: 'potato', cal: 70},
              {id: 9,name: 'cabbage', cal: 105},
              {id: 10,name: 'onion', cal: 100},]

let App = () => {
  return (
    <>  
        <List item={fruits} category='fruits'/>
        <List item={vegie} category='vegie'/>
    </>
  )
}

export default App

