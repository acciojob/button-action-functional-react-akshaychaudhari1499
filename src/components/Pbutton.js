import { useState } from "react"
import React from 'react'

function Pbutton() {

  const [para, setpara] = useState("")
  function paragraph() {
    setpara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
  }
  return (<>
  <button id='click' onClick={paragraph}>Click Me</button>
    <p id='para'>{para}</p>
  </>
  )
}
export default Pbutton;