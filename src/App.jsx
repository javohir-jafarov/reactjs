import react from 'react'
import Card from './components/Card'

const students = [
  {name: 'Javohir', age: 16},
  {name: 'patric', age: 32},
  {name: 'Anvar', age: 15}
]

let App = () => {
  return (
    <>
      <div className="cards">
        {
          students.map((student) => (
            <Card name={student.name} age={student.age}/>
          ))
        }
      </div>
    </>
  )
}

export default App

