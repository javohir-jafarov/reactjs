import react, { useState } from "react";

function App() {

  let [name, setName] = useState('Guest')
  let [quantity, setQuantity] = useState(1)
  let []

  function nameHandler(e) {
    setName(e.target.value)
  }
  function quantityHandler(e) {
    setQuantity(e.target.value)
  }
  return (
    <>
      <input onChange={nameHandler} className="border" type="text" name="" id="text" />
      <p>Name: {name}</p>
      
      {/*  */}

      <input type="number" name="" id="number" className="border" onChange={quantityHandler}/>
      <p>quantity: {quantity}</p>

      {/*  */}

      <textarea onChange={} className="border" name="" placeholder="Enter delivery struction" id=""></textarea>

    </>
  );
}

export default App;