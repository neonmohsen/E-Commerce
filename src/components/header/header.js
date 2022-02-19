import { Link } from "react-router-dom";
import "./header.style.scss";
import {auth} from "../../firebase/firebase.utils"

import { ReactComponent as Logo } from "../../assets/logo/083 crown.svg";

export default function Header({userData}) {
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
          userData ? 
          <div className = "option" onClick={() => auth.signOut()}>SING OUT</div>
          :
          <Link to = "/signin" className = "option">SIGN IN</Link>
        }
      </div>
    </div>
  );
}
