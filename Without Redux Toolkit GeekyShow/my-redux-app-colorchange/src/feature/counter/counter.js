import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement, incrementByAmount } from './counterSlice';

function Counter() {

  const count = useSelector((state) => state.counter.count)

  const dispatch = useDispatch();  //modify 


  return (

    <div >

      {/* button per dispatch call krenge jisme increment() ko call kiya.  */}
      <button aria-label="Icrement value" onClick={() => { dispatch(increment()) }}>+</button>

      <span className="value">{count}</span>

      <button aria-label="Decrement value" onClick={() => { dispatch(decrement()) }}>-</button>

      <button onClick={() => { dispatch(incrementByAmount(10)) }}>increment by 10</button>
      {/* payload me 10 jayega. */}



    </div>


  )
}
export default Counter;