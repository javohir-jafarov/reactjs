import react, { useState } from "react";

function App() {

  let [name, setName] = useState('Guest')
  let [quantity, setQuantity] = useState(1)
  let [comment, setComment] = useState('')
  let [payment, setPayment] = useState('Visa')

  function nameHandler(e) {
    setName(e.target.value)
  }
  function quantityHandler(e) {
    setQuantity(e.target.value)
  }
  function commentHandler(e) {
    setComment(e.target.value)
  }
  function paymentHandler(e) {
    setPayment(e.target.value)
  }
  return (
    <>
      <input onChange={nameHandler} className="border" type="text" name="" id="text" />
      <p>Name: {name}</p>
      <br />
      {/*  */}

      <input type="number" name="" id="number" className="border" onChange={quantityHandler}/>
      <p>quantity: {quantity}</p>
<br />
      {/*  */}
<br />
      <textarea onChange={commentHandler} className="border" name="" placeholder="Enter delivery struction" id=""></textarea>
      <p>Comment: {comment}</p>

      {/*  */}

      <select value={payment} onChange={paymentHandler} name="" id="">
        <option value="visa">Visa</option>
        <option value="mastercard">MasterCard</option>
        <option value="paypal">PayPal</option>
      </select>
      <p>payment: {payment}</p>
    </>
  );
}

export default App;