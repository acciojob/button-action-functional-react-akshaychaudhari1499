import { useState } from "react"
import React  from 'react'

function Pbutton() {
  
  const[para,setpara]=useState("")
      function paragraph(){    
      setpara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy")
      }
  return ( <>
     <p id='para'>{para}</p> 
      <button id='click' onClick={paragraph}>Click Me</button>
      </>
        )
}
export default Pbutton;