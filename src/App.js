import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useDisclosure } from "./CustomHooks/useDisclosure";
import { Home } from "./pages/Home";
import { Blog } from "./pages/BLOG";
import { Features } from "./pages/FEATURES";
import { LokBook } from "./pages/LOKBOOK";
import { Pages } from "./pages/PAGES";
import { CardPage } from "./pages/CardPage";


function App() {
	const {isOpen,onOpen,onClose} = useDisclosure(false);
  return (
    <div className="App">
		<BrowserRouter>
		<Header open = {onOpen}/>
			<Routes>
				<Route path="/" element={<Home close = {onClose} isOpen = {isOpen}/>}/>
				<Route path="/blog" element = {<Blog/>}/>
				<Route path="/features" element = {<Features/>}/>
				<Route path="/lokBook" element = {<LokBook/>}/>
				<Route path="/pages" element ={<Pages/>}/>
				<Route path="/card/:cardId" element={<CardPage/>}/>
				<Route path="*" element = {<h1>Not Found</h1>}/>
			</Routes>
		<Footer/>
		</BrowserRouter>
    </div>
  );
}

export default App;
