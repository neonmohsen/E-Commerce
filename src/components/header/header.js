import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/svg/083 crown.svg";
import CartIcon from "../cart-icon/cartIcon";
import CartDropDown from "../cart-dropdown/cartDropDown";


export default function Header() {

  const userData = useSelector(state => state.user);
  const cartHidden = useSelector(state => state.cartHidden)



  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/CONTACT">
          CONTACT
        </Link>
        {
          (userData.currentUser === null) ?
            <Link to="/signin" className="option">SIGN IN</Link>
            :
            <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        }
        <CartIcon />
      </div>
      {
        cartHidden.hidden ? null : <CartDropDown />
      }

    </div>
  );
}
