import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.utils";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/logo/083 crown.svg";
import { useEffect } from "react";

export default function Header() {

  const userData = useSelector(state => state.user)


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
      </div>
    </div>
  );
}
