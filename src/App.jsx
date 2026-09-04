import React, {useState} from 'react'
import Card from './components/Card'
const App = () => {
  let students = [
    {id: 0,}
  ]
  let [student, setStudent] = useState()
  return (
    <div>
      <Card />
    </div>
  )
}

export default App