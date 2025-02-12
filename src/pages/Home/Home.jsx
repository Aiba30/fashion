import { Hero } from "../../components/Hero";
import { WFashion } from "../../components/WFashion";
import { Modal } from "../../components/Modal";
export const Home = ({ cart, addInCart, deleteInCart, close, isOpen }) => {
  return (
    <main>
      <Hero />
      <WFashion cart={cart} addInCart={addInCart} deleteInCart={deleteInCart} />
      {isOpen && <Modal close={close} isOpen={isOpen} />}
    </main>
  );
};
