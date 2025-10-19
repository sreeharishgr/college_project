import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  account:{}
}
export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAccount: (state, action) => {
      state.account = action.payload
    },
    clearAccount: (state) => {
      state.account = {};
    },
  },
})

export const { setAccount,clearAccount } = accountSlice.actions
export default accountSlice.reducer