import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import { Layout } from "./components/Layout";


function App() {
	const {isOpen,onOpen,onClose} = useDisclosure(false);
	const [cart,setCart] = useState({});
	function addInCart(id, picture, name, desc, price, activePrice){
		const newCart = {...cart};
		newCart[id] = newCart[id] ? [...newCart[id],{id,picture,name,desc,price,activePrice}] : [{id,picture,name,desc,price,activePrice}];
		setCart(newCart);
	}

	function deleteInCart(id){
		const filterCart = {...cart};
		filterCart[id].pop();
		setCart(filterCart);
	}
const routes = createBrowserRouter([
	{
		path:"/" ,
		element:<Layout cart={cart} addInCart={addInCart} deleteInCart={deleteInCart} close = {onClose} isOpen = {isOpen} onOpen = {onOpen} />,
		children:[
			{
				path:'',
				element:<Home/>
			},
			{
				path:"blog", 
				element:<Blog/>
			},
			{
				path:"features",
				element:<Features/>
			},
			{
				path:"lokBook", 
				element:<LokBook/>
			},
			{
				path:"pages", 
				element:<Pages/>
			},
			{
				path:"card/:cardId", 
				element:<CardPage/>
			},
			{
				path:"order", 
				element:<OrderForm/>
			},
		]
	},
	{
		path:"/cart", 
		element:<Cart cart={cart}/>
	},
	{
		 path:"*", 
		 element:<h1>Not Found</h1>
	}
])
  return (
    <div className="App">
			<RouterProvider router={routes}/>
    </div>
  );
}

export default App;
