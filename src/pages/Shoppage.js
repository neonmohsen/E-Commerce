
import "./shopppage.style.scss";
import {Outlet} from "react-router-dom"

export default function Shoppage() {
  return (
    <>
      <div className="shop-page">
        <Outlet />
      </div>
    </>
  );
}
