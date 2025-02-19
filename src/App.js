import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Blog } from "./pages/BLOG";
import { Features } from "./pages/FEATURES";
import { LokBook } from "./pages/LOKBOOK";
import { Pages } from "./pages/PAGES";
import { CardPage } from "./pages/CardPage";
import { OrderForm } from "./pages/OrderForm";
import { Cart } from "./pages/Cart/Cart";
import { Layout } from "./components/Layout";


function App() {
const routes = createBrowserRouter([
	{
		path:"/" ,
		element:<Layout />,
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
			{
				path:"/cart", 
				element:<Cart/>
			},
		]
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
