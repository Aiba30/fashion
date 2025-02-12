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
import { OrderForm } from "./pages/OrderForm";
import { Cart } from "./pages/Cart/Cart";
import { useState } from "react";


function App() {
	const {isOpen,onOpen,onClose} = useDisclosure(false);
	const [cart,setCart] = useState([]);
	function addInCart(id, picture, name, desc, price, activePrice){
		setCart(prev=>[...prev,{id,picture,name,desc,price,activePrice}]);
	}

	function deleteInCart(id){
			const cardId = cart.findIndex(item => item.id === id);
			if (cardId === -1) return;
			setCart(cart.filter((_, index) => index !== cardId));
	}

  return (
    <div className="App">
		<BrowserRouter>
		<Header open = {onOpen}/>
			<Routes>
				<Route path="/" element={<Home addInCart={addInCart} deleteInCart={deleteInCart} close = {onClose} isOpen = {isOpen}/>}/>
				<Route path="/blog" element = {<Blog/>}/>
				<Route path="/features" element = {<Features/>}/>
				<Route path="/lokBook" element = {<LokBook/>}/>
				<Route path="/pages" element ={<Pages/>}/>
				<Route path="/card/:cardId" element={<CardPage/>}/>
				<Route path="/order" element={<OrderForm/>}/>
				<Route path="/cart" element = {<Cart cart={cart}/>}/>
				<Route path="*" element = {<h1>Not Found</h1>}/>
			</Routes>
		<Footer/>
		</BrowserRouter>
    </div>
  );
}

export default App;
