import { Card } from "./Card";
import "./fashion.css";
import { cards } from "../../mock/mockFile";
export const WFashion = () => {
  return (
    <section className="fashion">
      <div className="text-content">
        <h3 className="fashion-title">WOMEN’S FASHION</h3>
        <p className="fashion-subtitle">
          Shop our new arrivals from established brands
        </p>
      </div>
      <div className="card-container">
        {cards.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              picture={card.img}
              name={card.name}
              desc={card.desc}
              price={card.price}
              activePrice={card.activePrice}
            />
          );
        })}
      </div>
    </section>
  );
};
