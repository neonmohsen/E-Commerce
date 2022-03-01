
import CollectionPreview from "../collection-preview/collectionPreview";
import { useSelector } from "react-redux";
import {selectShopDataCollectionArray } from "../../services/redux/shopDataSelector";
import "./collectionOverView.style.scss";

export default function CollectionOverView() {
  const shopData = useSelector(state => selectShopDataCollectionArray(state))

  return (
    <>
      <div className="collection-overview">
        {shopData ? shopData.map(({ id, ...other }) => (
          <CollectionPreview key = {id} {...other} />
        )) : null}
      </div>
    </>
  );
}
