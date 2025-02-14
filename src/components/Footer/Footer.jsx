import { FooterBottom } from "./FooterBottom";
import { FooterLeft } from "./FooterLeft";
import { FooterRight } from "./FooterRight";
import "./footer.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <FooterLeft />
      <FooterRight />
      <FooterBottom />
    </footer>
  );
};
