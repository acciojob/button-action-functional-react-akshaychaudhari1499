import { useState } from "react"
import React from 'react'

function Pbutton() {

  // const [para, setpara] = useState("")
  function paragraph() {
    // setpara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy") 
    const para=document.getElementById('para') 
    para.innerHTML = "Hello, I've learnt to use the full-stack evaluation";
  

  }
  return (<>
  <button id='click' onClick={paragraph}>Click Me</button>
  <p id="para"></p>
    </>
  )
}
export default Pbutton;