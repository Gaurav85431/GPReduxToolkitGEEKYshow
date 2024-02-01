// USE COUNT in coin()function.  useSelector ka use krke data ko fetch krenge.

import { useSelector } from "react-redux"

function Coin() {


  const count = useSelector((state) => state.counter.count)

  return (
    <div>
      <h1>Coin me count called and its value value :{count}</h1>


    </div>

  )
}

export default Coin

