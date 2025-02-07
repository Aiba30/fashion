import { useState } from "react";
import "./fashion.css";
import { useNavigate } from "react-router-dom";
export const Card = ({ id, picture, name, desc, price, activePrice }) => {
  const [product, setProduct] = useState(0);
  function addInCart() {
    setProduct((prev) => prev + 1);
  }
  function deleteInCart() {
    if (product > 0) {
      setProduct((prev) => prev - 1);
    }
  }
  const redirect = useNavigate();
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
        <button onClick={addInCart}>+</button>
        <span>{product}</span>
        <button onClick={deleteInCart}>-</button>
      </div>
      <div className="card-prices">
        <span className="card-price">{price}</span>
        <span className="card-price active">{activePrice}</span>
      </div>
    </div>
  );
};
