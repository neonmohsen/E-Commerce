import "./checkout.style.scss";

import { useSelector } from "react-redux";
import CheckoutItems from "../components/checkout-items/checkoutItems";
import { selectCartItems, selectTotalPrice } from "../services/redux/cartSelector";
import CheckoutStripe from "../components/stripe-checkout/stripeCheckout";

export default function Checkout() {

    const totalPrice = useSelector(state => selectTotalPrice(state));
    const cartItem = useSelector(state => selectCartItems(state));
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
                <CheckoutStripe price = {totalPrice} />
            </div>
        </>
    )
}