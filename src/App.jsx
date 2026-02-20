import './App.css'
import { useState } from 'react';

function App() {
  // let Counter = 15;

  let [Counter,setCounter]= useState(15);

  // addition function
  const addValue = () =>{
    console.log("clicked",Counter);
    // Counter = Counter + 1;
    setCounter(Counter+1);
  }

  // remove function
  const removeValue = () => {
    console.log("clicked",Counter);
    // another way to write
    Counter=Counter - 1;
    setCounter(Counter);
  }

  return (
    <>
    <h1>Aryan Yadav</h1>
    <h2>Counter value : {Counter}</h2>

    <button
    onClick={addValue}
    >Add Value</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App
