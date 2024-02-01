import React from 'react'

function Coin() {
  return (
    <div>Coin</div>
  )
}

export default Coin

/* problem ye hia ki hm chahte hia Coin me count ka value ko print karana lekin wo hm aise nhi kar sakte hia because count ka value declare kiya hua hai counter.js file me. To is problem ka 2 solution hai--

  1. ya to context api ka use kr le
  2. count , setCount jo hai aur useState usko App.js me de denge jisse ki hm usko Counter.js, Coin.js me use kar saken

*/
// agar hm upper ke jo 2 solution hai usko use nhi karna chahte hia to hhm use kar sakte hia redux ka, jo ki state manage karega.