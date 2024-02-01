import { configureStore } from '@reduxjs/toolkit'

// import counterReducer from '../features/counter/counterSlice'
import counterSlice from '../feature/counter/counterSlice'
// counterSlice ke under ke reducer ko hmne counterReducer ke name se import kiya

export const store = configureStore({  // is se hm 1 state create kar rhe hai.
  reducer: {
    // saare reducer ko yaha per mention krna hoga tavi hmare store me sara state aa payega.+
    counter: counterSlice,
    // counter: counterReducer,
  },
})

// export default configureStore({})