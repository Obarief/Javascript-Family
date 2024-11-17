import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from './pages/login'
import RegisterPage from './pages/register.jsx'
import ProductPage from './pages/products.jsx'
import API from './pages/nyoba.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>hello world</div>,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/products",
    element: <ProductPage/>
  },
  {
    path: "/nyoba",
    element: <API/>
  }
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,

  
);

