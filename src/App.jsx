import React, {useState} from 'react'
import Card from './components/Card'
const App = () => {
  let studentsData = [
    {id: 0, name: 'Javohir', age: 16},
    {id: 0, name: 'Anvar', age: 12},
  ]
  let [students, setStudents] = useState(studentsData)
  return (
    <div>
      <div className="studnets">
        {students.map((item, index) => (<Card name={item.name} key={index} age={item.age}/>))}
      </div>
    </div>
  )
  
}

export default App