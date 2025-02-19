import { useState } from "react";
import "./cart.css";
import { useOutletContext } from "react-router-dom";
export const Cart = () => {
  const { cart } = useOutletContext();
  const [state, setState] = useState(cart);
  function renderCards() {
    const cards = [];
    for (let key in state) {
      cards.push(...state[key]);
    }
    return cards;
  }
  return (
    <main className="cart-main">
      <h1 className="cart-title">Cart</h1>
      <div className="cartt">
        {renderCards().length > 0 ? (
          renderCards().map((card, index) => {
            return (
              <div className="cart__item" key={index}>
                <p className="cart__name">{card.name}</p>
                <p className="cart__desc">{card.desc}</p>
              </div>
            );
          })
        ) : (
          <h2>Корзина пуста</h2>
        )}
      </div>
    </main>
  );
};
