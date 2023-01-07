import React from 'react'
function Pbutton() {
      function paragraph(){    
      document.getElementById('para').innerText="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy" 
      }
  return ( <>
    <p id='para'></p>  
      <button id='click' onClick={paragraph}>Click Me</button>
      </>
        )
}
export default Pbutton;