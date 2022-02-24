import { createSlice } from '@reduxjs/toolkit';
import { addItemToCart } from '../../utils/cart.utils';

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
    }
  }
})

export const { cartHidden , addCartItem } = cartSlice.actions

export default cartSlice.reducer