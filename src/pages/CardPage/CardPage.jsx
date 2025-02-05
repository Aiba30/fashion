import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { cards } from "../../mock/mockFile";
import "./cardPage.css";
export const CardPage = () => {
  const [currentCard, setCurrentCard] = useState({});
  const { cardId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (cardId) {
      const card = cards.find((item) => item.id === Number(cardId));
      if (card) setCurrentCard(card);
    }
  }, []);
  return (
    <main>
      <button className="return" onClick={() => navigate(-1)}>
        back
      </button>
      <div className="current-card">
        <img src={currentCard.img} className="card-image" alt="currentCard" />
        <p className="card-name">{currentCard.name}</p>
        <p className="card-description">{currentCard.desc}</p>
        <div className="cart">
          <button>+</button>
          <span>0</span>
          <button>-</button>
        </div>
        <div className="card-prices">
          <span className="card-price">{currentCard.price}</span>
          <span className="card-price active">{currentCard.activePrice}</span>
        </div>
      </div>
    </main>
  );
};
