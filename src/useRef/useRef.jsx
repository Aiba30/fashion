import { useEffect, useRef, useState } from "react";

export const UserefComponent = () => {
  const countRef = useRef(0);
  const [time, setTime] = useState(10);
  const timerRef = useRef(null);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  }, []);
  if (time < 1) {
    clearInterval(timerRef.current);
    setTime("Время вышло");
  }
  function increment() {
    countRef.current++;
    console.log(countRef.current);
  }
  return (
    <>
      <button
        style={{ padding: "10px 20px", background: "grey" }}
        onClick={increment}
      >
        +
      </button>
      <h3>{time}</h3>
    </>
  );
};
