import { Hero } from "../../components/Hero";
import { WFashion } from "../../components/WFashion";
import { Modal } from "../../components/Modal";
export const Home = ({ close, isOpen }) => {
  return (
    <main>
      <Hero />
      <WFashion />
      {isOpen && <Modal close={close} isOpen={isOpen} />}
    </main>
  );
};
