import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Modal } from "./components/Modal";
import { WFashion } from "./components/WFashion";
import { useDisclosure } from "./CustomHooks/useDisclosure";


function App() {
	const {isOpen,onOpen,onClose} = useDisclosure(false);
  return (
    <div className="App">
		<Header open = {onOpen}/>
		<Hero/>
		<WFashion/>
		{isOpen && <Modal close = {onClose} isOpen={isOpen}/>}
		<Footer/>
    </div>
  );
}

export default App;
