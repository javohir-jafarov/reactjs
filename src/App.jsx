// import react, { useState } from "react";

// function App() {

//   let [name, setName] = useState('Guest')
//   let [quantity, setQuantity] = useState(1)
//   let [comment, setComment] = useState('')
//   let [payment, setPayment] = useState('Visa')
//   let [delivery, setDelivery] = useState('delivery')

//   function nameHandler(e) {
//     setName(e.target.value)
//   }
//   function quantityHandler(e) {
//     setQuantity(e.target.value)
//   }
//   function commentHandler(e) {
//     setComment(e.target.value)
//   }
//   function paymentHandler(e) {
//     setPayment(e.target.value)
//   }
//   function deliveryHandler(e) {
//     setDelivery(e.target.value)
//   }
//   return (
//     <>
//       <input onChange={nameHandler} className="border" type="text" name="" id="text" />
//       <p>Name: {name}</p>
//       <br />
//       {/*  */}

//       <input type="number" name="" id="number" className="border" onChange={quantityHandler} />
//       <p>quantity: {quantity}</p>
//       <br />
//       {/*  */}
//       <br />
//       <textarea onChange={commentHandler} className="border" name="" placeholder="Enter delivery struction" id=""></textarea>
//       <p>Comment: {comment}</p>

//       {/*  */}

//       <select value={payment} onChange={paymentHandler} name="" id="">
//         <option value="visa">Visa</option>
//         <option value="mastercard">MasterCard</option>
//         <option value="paypal">PayPal</option>
//       </select>
//       <p>payment: {payment}</p>

//       {/*  */}

//       <div className="radio" >
//         <input
//           type="radio"
//           name="delivery"
//           id="delivery"
//           value='delivery'
//           checked={delivery === 'delivery'}
//           onChange={deliveryHandler}
          
//         />

//         <label htmlFor="delivery">delivey</label>

//                   <br />

//         <input 
//           type="radio"
//           name="delivery" 
//           id="pickup" 
//           value='pickup'
//           onChange={deliveryHandler}
//         />

//         <label htmlFor="pickup">pickup</label>

//       </div>
//       <p>Shipping: {delivery}</p>

//     </>
//   );
// }

// export default App;

import React, { useState } from 'react'
import ColorPicker from './components/ColorPicker'
import Alert from './components/Alert'

  

const App = () => {
  let [color, setColor ] = useState('#ffffff')
  let [isCopied, setIsCopied] = useState(false)

let copyColor = () => {
    navigator.clipboard.writeText(color)
    setIsCopied(true)
    setTimeout(() => {setIsCopied(false)}, 1000)
  }

  return (
    <>

        <ColorPicker copy={copyColor} color={color} setColor={setColor}/>
        {isCopied && <Alert />}
    
    </>
  )
}

export default App
