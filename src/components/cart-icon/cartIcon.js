import { ReactComponent as ShoppingIcon } from "../../assets/svg/120 shopping-bag.svg";
import { useDispatch, useSelector } from "react-redux";
import { cartHidden } from "../../services/redux/cartReducer";
import { selectCartItemCount } from "../../services/redux/cartSelector";


import "./cartIcon.style.scss";

export default function CartIcon() {
    const dispatch = useDispatch();
    const itemCount = useSelector(state => selectCartItemCount(state));

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