import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hidden : true
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartHidden : state => {
        state.hidden = !state.hidden
    }
  }
})

export const { cartHidden } = cartSlice.actions

export default cartSlice.reducer