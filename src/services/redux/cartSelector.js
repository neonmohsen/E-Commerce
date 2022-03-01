import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectHiddenCart = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItem
)


export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItem) => cartItem.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
)

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (cartItem) => cartItem.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity * cartItem.price, 0)
)