import { useCallback } from "react";
import "./fashion.css";
import { useNavigate } from "react-router-dom";
export const Card = ({
  id,
  picture,
  name,
  desc,
  price,
  activePrice,
  cart,
  addInCart,
  deleteInCart,
}) => {
  const redirect = useNavigate();
  const addToCart = useCallback(() => {
    addInCart(id, picture, name, desc, price, activePrice);
  }, [cart]);
  return (
    <div className="card">
      <img
        onClick={() => redirect(`/card/${id}`)}
        src={picture}
        alt="card-img"
        className="card-image"
      />
      <p className="card-name">{name}</p>
      <h6 className="card-description">{desc}</h6>
      <div className="cart">
        <button onClick={addToCart}>+</button>
        <span>{cart[id] ? cart[id].length : 0}</span>
        <button onClick={() => deleteInCart(id)}>-</button>
      </div>
      <div className="card-prices">
        <span className="card-price">{price}</span>
        <span className="card-price active">{activePrice}</span>
      </div>
    </div>
  );
};
