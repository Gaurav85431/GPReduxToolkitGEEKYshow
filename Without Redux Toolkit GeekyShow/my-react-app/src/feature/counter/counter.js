import React from 'react'
import { useState } from 'react'


function Counter() {

  const [count, setCount] = useState(0)

  return (

    <div >

      <button aria-label="Icrement value" onClick={() => { setCount(count + 1) }}>+</button>
      <span className="value">{count}</span>

      <button aria-label="Decrement value" onClick={() => { setCount(count - 1) }}>-</button>


    </div>


  )
}
export default Counter;