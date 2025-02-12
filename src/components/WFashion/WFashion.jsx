import { Card } from "./Card";
import "./fashion.css";
import { cards } from "../../mock/mockFile";
import { useMemo, useState } from "react";
export const WFashion = ({ addInCart, deleteInCart }) => {
  const [value, setValue] = useState("");
  const filteredCards = useMemo(
    () =>
      cards.filter((item) => {
        if (item.name.toLocaleLowerCase().includes(value)) {
          return item;
        }
      }),
    [value]
  );
  return (
    <section className="fashion">
      <div className="text-content">
        <h3 className="fashion-title">WOMEN’S FASHION</h3>
        <p className="fashion-subtitle">
          Shop our new arrivals from established brands
        </p>
      </div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
      />
      <div className="card-container">
        {filteredCards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              picture={card.img}
              name={card.name}
              desc={card.desc}
              price={card.price}
              activePrice={card.activePrice}
              addInCart={addInCart}
              deleteInCart={deleteInCart}
            />
          );
        })}
      </div>
    </section>
  );
};
