import "./cartItem.style.scss";

export default function CartItem({ item: { imageUrl, price, quantity, name } }) {
    return (
        <>
            <div className="cart-item">
                <img src={imageUrl} alt='item' />
                <div className="item-details">
                    <span className="name">{name}</span>
                    <span className="price">{quantity} * ${price}</span>
                </div>
            </div>
        </>
    )

}