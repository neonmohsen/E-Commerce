import CustomButton from "../custom-button/customBotton"
import "./cartDropDown.style.scss"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import CartItem from "../cart-items/cartItem";



export default function CartDropDown(){

    

    const cartItem = useSelector(state => state.cartHidden.cartItem);

    useEffect(() => {
        console.log(cartItem);
    } , [cartItem]);

    return(
        <>
            <div className = "cart-dropdown">
                <div className = "cart-items">
                    {
                       cartItem.map(cartItem => <CartItem key = {cartItem.id} item = {cartItem} />)
                    }
                </div>
                <CustomButton >CHECK OUT</CustomButton>
            </div>
        </>
    )
}