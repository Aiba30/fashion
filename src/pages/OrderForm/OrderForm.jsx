import { useLocation } from "react-router-dom";

export const OrderForm = () => {
  const { state } = useLocation();
  return (
    <main>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "10px",
        }}
      >
        <input type="text" />
        <input type="text" />
        <button>order</button>
      </form>
      <div>
        <img src={state.img} alt="" />
      </div>
    </main>
  );
};
