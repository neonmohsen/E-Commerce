import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart , removeItem } from '../../utils/cart.utils';

const initialState = {
  hidden : true,
  cartItem : []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartHidden : state => {
        state.hidden = !state.hidden
    },

    addCartItem(state , action){
        state.cartItem = addItemToCart(state.cartItem , action.payload)
    },

    clearItem(state , action){
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload.id)
    },

    removeItems(state , action){
      state.cartItem = removeItem(state.cartItem , action.payload)
    }
  }
})

export const { cartHidden , addCartItem , clearItem , removeItems } = cartSlice.actions

export default cartSlice.reducer