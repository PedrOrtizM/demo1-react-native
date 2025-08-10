import { createReducer } from '@reduxjs/toolkit'
import { decrement, increment, incrementByAmount } from '../actions/requestCounterAction'

const initialState = { value: 0 };

export const requestCounterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++
    })
    .addCase(decrement, (state) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
});
