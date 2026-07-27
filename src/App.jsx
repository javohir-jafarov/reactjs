import react, { useState } from "react";

function App() {

  let [name, setName] = useState('cdcd')

  return (
    <>
      <input type="text" value={name}
      onChange={(e) => setName(e.target.value)}/>

      <p>{name}</p>
    </>
  );
}

export default App;