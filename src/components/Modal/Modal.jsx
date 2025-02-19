import { useEffect, useState } from "react";
import "./modal.css";
import { Timer } from "./Timer";
import { useOutletContext } from "react-router-dom";
export const Modal = () => {
  const { isOpen, onClose } = useOutletContext();
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    let timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
      setTimeout(() => alert("Выполнено размонтирование компоненты"), 300);
    };
  }, []);
  return (
    <div className="modal">
      <div className="modal__content">
        <button onClick={onClose} className="close-modal">
          &#x2715;
        </button>
        <h3 className="modal__title">Войдите в свой аккаунт</h3>
        <hr className="hr" />
        <form onSubmit={(e) => e.preventDefault()} className="modal__form">
          <input type="text" placeholder="Имя пользователя" />
          <input type="password" placeholder="Пароль" />
          <button>Авторизоваться</button>
        </form>
        {isOpen && <Timer seconds={seconds} />}
      </div>
    </div>
  );
};
