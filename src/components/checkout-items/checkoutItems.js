import "./checkoutItems.style.scss";
import { useDispatch } from "react-redux";
import { clearItem, removeItems , addCartItem } from "../../services/redux/cartReducer";

export default function CheckoutItems({ cartItem }) {
    const { name, price, quantity, imageUrl } = cartItem
    const dispatch = useDispatch();

    return (
        <>
            <div className="checkout-item">
                <div className="image-container">
                    <img alt='item' src={imageUrl} />
                </div>
                <span className="name">{name}</span>
                <span className="quantity">
                    <div className="arrow" onClick={() => dispatch(removeItems(cartItem))}>&#10094;</div>
                    <span className = "value">
                        {quantity}
                    </span>
                    <div className="arrow" onClick={() => dispatch(addCartItem(cartItem))}>&#10095;</div>
                </span>
                <span className="price">{price}</span>
                <div className="remove-button" onClick={() => dispatch(clearItem(cartItem))}>&#10005;</div>
            </div>
        </>
    )
}