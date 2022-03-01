import CustomButton from "../custom-button/customBotton";
import "./cartDropDown.style.scss";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cart-items/cartItem";
import { useNavigate } from "react-router-dom";
import { cartHidden } from "../../services/redux/cartReducer";
import { selectCartItems } from "../../services/redux/cartSelector";




export default function CartDropDown() {


    const navigate = useNavigate();
    const cartItem = useSelector(state => selectCartItems(state));
    const dispatch = useDispatch();
    return (
        <>
            <div className="cart-dropdown">
                <div className="cart-items">
                    {
                        cartItem.length ?
                            cartItem.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                            :
                            <span className="empty-message">Your cart is empty</span>
                    }
                </div>
                <CustomButton onClick={() => {
                    navigate("./checkout")
                    dispatch(cartHidden())
                }} >CHECK OUT</CustomButton>
            </div>
        </>
    )
}