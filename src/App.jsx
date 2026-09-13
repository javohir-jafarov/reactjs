import React, { useState } from 'react'
import Card from './components/Card'
const App = () => {
  let studentsData = [
    { id: 0, name: 'Javohir', age: 16 },
    { id: 1, name: 'Anvar', age: 12 },
  ]
  let [students, setStudents] = useState(studentsData)

  let addHandler = () => {
    let nameInp = document.getElementById('nameInp').value
    document.getElementById('nameInp').value = ''

    let ageInp = +document.getElementById('ageInp').value

    if (nameInp.trim() != '' && ageInp !== 0) {
      document.getElementById('nameInp').value = ''
      document.getElementById('ageInp').value = ''

      let lastStudent = students.at(-1)
      let obj = {
        id: students.length === 0 ? 0 : lastStudent.id + 1,
        name: nameInp,
        age: ageInp
      }
      setStudents(s => [...s, obj])
      
    }

    console.log(students)


  }
  let handleDelete = (e) => {
    setStudents(s => s.filter((_, i) => {return i !== e}))
  }
  return (
    <div>
      <div className="form">
        <input type="text" placeholder='Name...' id='nameInp' />
        <input type="number" name="" placeholder='Age...' id="ageInp" />
        <button onClick={() => addHandler()}>Add</button>
      </div>
      <div className="studnets">
        {students.map((item, index) => (
          <Card

          name={item.name} 
          key={index} 
          age={item.age} 
          delete={() => (handleDelete(index))}

          />))}
      </div>
    </div>
  )

}

export default App