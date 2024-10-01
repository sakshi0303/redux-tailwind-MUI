import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr: [],
}

export const CartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add2cart: (state,action) => {
      //inside action.payload we get home.jsx disptach(add2cart) elemement
      state.arr=[...state.arr,action.payload]
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { add2cart, decrement, incrementByAmount } = CartSlice.actions

export default CartSlice.reducer