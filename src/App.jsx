import react, { useState } from "react";

function App() {

  let [name, setName] = useState('Guest')


  function nameHandler(e) {
    setName(e.target.value)
  }
  return (
    <>
      <input onChange={nameHandler} className="border" type="text" name="" id="text" />
      <p>Name: {name}</p>
      
    </>
  );
}

export default App;