import { ReactComponent as ShoppingIcon } from "../../assets/svg/120 shopping-bag.svg";
import { useDispatch } from "react-redux";
import { cartHidden } from "../../services/redux/cartReducer";

import "./cartIcon.style.scss";

export default function CartIcon() {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(cartHidden())
    }

    return (
        <div className="cart-icon" onClick = {clickHandler}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"> 0 </span>
        </div>
    )
}