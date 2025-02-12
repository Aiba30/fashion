import { useState } from "react";
const styles = {
  width: "150px",
  padding: "10px",
  border: "solid",
  margin: "0 0 0 15px",
};
export const Cart = ({ cart }) => {
  const [state, setState] = useState(cart);
  return (
    <main>
      <h1>Cart</h1>
      {state.length > 0 ? (
        cart.map((item, index) => {
          return (
            <>
              <p style={styles} key={index}>
                {item.name}
              </p>
              <button
                style={{
                  padding: "10px 15px",
                  background: "orange",
                  margin: "0 0 10px 140px",
                  borderRadius: "5px",
                }}
              >
                delete
              </button>
            </>
          );
        })
      ) : (
        <p>Корзина пуста</p>
      )}
    </main>
  );
};
