import CustomButton from "../custom-button/customBotton";
import "./collectionItem.style.scss"
import {useDispatch} from "react-redux"
import { addCartItem } from "../../services/redux/cartReducer";


export default function CollectionItem({ item }) {

  const dispatch = useDispatch();

  const {name, price, imageUrl} = item

  return (
    <>
      <div className="collection-item">
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />

        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">{`$ ${price}`}</span>
        </div>
        <CustomButton onClick = {() => dispatch(addCartItem(item))}  inverted>Add to cart</CustomButton>
      </div>
    </>
  );
}
