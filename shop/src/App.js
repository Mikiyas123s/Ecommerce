import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Product from './components/Product';
import Login from './pages/Login';

import{
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";
import { productData } from './api/Api';
      const Layout =()=>{
          return(
            <div>
                <Header></Header>
                <ScrollRestoration/>
                 <Outlet></Outlet>
               <Footer></Footer>
               </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path: "/",
        element: <Home/>,
        loader:productData,
      },
      {
         path:"/product/:id",
         element:<Product/>
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);


function App() {
  return (
    <div className='font-bodyFont'>
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;