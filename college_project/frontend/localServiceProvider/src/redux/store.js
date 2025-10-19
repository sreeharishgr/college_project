import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import accountReducer from './slices/accountSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    account: accountReducer
  },
})
