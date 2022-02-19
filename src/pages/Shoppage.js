import { useState, useEffect } from "react";
import CollectionPreview from "../components/collection-preview/collectionPreview";
import SHOP_DATA from "../components/shopdata";
import "./shopppage.style.scss";

export default function Shoppage() {
  const [data, setData] = useState();

  useEffect(() => {
    setData(SHOP_DATA);
  }, []);

  return (
    <>
      <div className="shop-page">
        {data ? data.map(({ id, ...other }) => (
          <CollectionPreview key = {id} {...other} />
        )) : null}
      </div>
    </>
  );
}
