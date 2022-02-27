import "./checkout.style.scss";

import { useSelector } from "react-redux";
import CheckoutItems from "../components/checkout-items/checkoutItems";

export default function Checkout() {

    const cartItem = useSelector(state => state.cartHidden.cartItem);
    const itemPrice = cartItem.map(item => item.price * item.quantity)
    const totalPrice = itemPrice.reduce((accumalatedQuantity, itemPrice) => accumalatedQuantity + itemPrice, 0);
    return (
        <>
            <div className="checkout-page">
                <div className="checkout-header">
                    <div className="header-block">
                        <span>Product</span>
                    </div>
                    <div className="header-block">
                        <span>Description</span>
                    </div>
                    <div className="header-block">
                        <span>Quantity</span>
                    </div>
                    <div className="header-block">
                        <span>Price</span>
                    </div>
                    <div className="header-block">
                        <span>Remove</span>
                    </div>
                </div>
                {
                    cartItem.map(item => <CheckoutItems key = {item.id} cartItem = {item} />)
                }
                <div className="total">TOTAL : ${totalPrice}</div>
            </div>
        </>
    )
}