import { Hero } from "../../components/Hero";
import { WFashion } from "../../components/WFashion";
import { Modal } from "../../components/Modal";
import { useOutletContext } from "react-router-dom";
export const Home = () => {
  const { isOpen } = useOutletContext();
  return (
    <>
      <Hero />
      <WFashion />
      {isOpen && <Modal />}
    </>
  );
};
