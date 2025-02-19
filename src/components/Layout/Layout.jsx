import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { UserefComponent } from "../../useRef/useRef";
import { Video } from "../../useRef/Video";
import { useDisclosure } from "../../CustomHooks/useDisclosure";
import { useState } from "react";
export const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(false);
  const [cart, setCart] = useState({});
  function addInCart(id, picture, name, desc, price, activePrice) {
    const newCart = { ...cart };
    newCart[id] = newCart[id]
      ? [...newCart[id], { id, picture, name, desc, price, activePrice }]
      : [{ id, picture, name, desc, price, activePrice }];
    setCart(newCart);
  }

  function deleteInCart(id) {
    const filterCart = { ...cart };
    filterCart[id].pop();
    setCart(filterCart);
  }
  return (
    <>
      <Header open={onOpen} />
      <main>
        <Outlet context={{ cart, addInCart, deleteInCart, onClose, isOpen }} />
        <UserefComponent />
        <Video />
      </main>
      <Footer />
    </>
  );
};
