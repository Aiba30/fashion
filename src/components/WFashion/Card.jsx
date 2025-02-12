import { useState } from "react";
import "./fashion.css";
import { useNavigate } from "react-router-dom";
export const Card = ({
  id,
  picture,
  name,
  desc,
  price,
  activePrice,
  addInCart,
  deleteInCart,
}) => {
  const redirect = useNavigate();
  const [count, setCount] = useState(0);
  function increment() {
    setCount((prev) => prev + 1);
  }
  function decrement() {
    if (count > 0) setCount((prev) => prev - 1);
  }
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
        <button
          onClick={() => {
            addInCart(id, picture, name, desc, price, activePrice);
            increment();
          }}
        >
          +
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            deleteInCart(id);
            decrement();
          }}
        >
          -
        </button>
      </div>
      <div className="card-prices">
        <span className="card-price">{price}</span>
        <span className="card-price active">{activePrice}</span>
      </div>
    </div>
  );
};
