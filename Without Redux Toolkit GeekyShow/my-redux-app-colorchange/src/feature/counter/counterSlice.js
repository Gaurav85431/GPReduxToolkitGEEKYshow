import { createSlice } from '@reduxjs/toolkit'

/*
const MyInitialState = {
  count: 0
}
*/

export const counterSlice = createSlice({
  name: 'counter',
  // initialState: MyInitialState, // initial value of count
  initialState: {
    // hmara state ka name count hai to hme count ko count se replace karenge.
    count: 0,
  },
  reducers: {
    increment: (state) => {

      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer