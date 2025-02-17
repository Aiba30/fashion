import { Hero } from "../../components/Hero";
import { WFashion } from "../../components/WFashion";
import { Modal } from "../../components/Modal";
import { useOutletContext } from "react-router-dom";
export const Home = () => {
  const { cart, addInCart, deleteInCart, close, isOpen } = useOutletContext();
  return (
    <>
      <Hero />
      <WFashion cart={cart} addInCart={addInCart} deleteInCart={deleteInCart} />
      {isOpen && <Modal close={close} isOpen={isOpen} />}
    </>
  );
};
