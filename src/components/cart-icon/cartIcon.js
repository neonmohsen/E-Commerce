import { ReactComponent as ShoppingIcon } from "../../assets/svg/120 shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { cartHidden } from "../../services/redux/cartReducer";

import "./cartIcon.style.scss";

export default function CartIcon() {
    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cartHidden.cartItem);
    const itemCount =  cartItem.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)

    const clickHandler = () => {
        dispatch(cartHidden())
    }

    return (
        <div className="cart-icon" onClick={clickHandler}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"> {itemCount} </span>
        </div>
    )
}