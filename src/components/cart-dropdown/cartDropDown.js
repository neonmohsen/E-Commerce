import CustomButton from "../custom-button/customBotton"
import "./cartDropDown.style.scss"

export default function CartDropDown(){
    return(
        <>
            <div className = "cart-dropdown">
                <div className = "cart-items"></div>
                <CustomButton >CHECK OUT</CustomButton>
            </div>
        </>
    )
}