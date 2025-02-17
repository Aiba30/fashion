import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { UserefComponent } from "../../useRef/useRef";
import { Video } from "../../useRef/Video";

export const Layout = ({
  cart,
  addInCart,
  deleteInCart,
  close,
  isOpen,
  onOpen,
}) => {
  return (
    <>
      <Header open={onOpen} />
      <main>
        <Outlet context={{ cart, addInCart, deleteInCart, close, isOpen }} />
        <UserefComponent />
        <Video />
      </main>
      <Footer />
    </>
  );
};
