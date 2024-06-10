import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout'
import Home from "./page/Home"
import Contact from "./page/Contact"
import About from "./page/About"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout2 from "./page/Layout"
import Register from './page/Register';
import Login from "./page/Login"



let route = createBrowserRouter( [{
  path: "/",
  element: <Layout/>,
  children: [
    {
      path: "",
      element: <Home/>
    },
    {
      path: "contact",
      element: <Contact/>
    },
    {
      path: "about",
      element: <About/>
    },
  // {
  //   path: "products",
  //   element: <Products/>,
  //   children: [
  //     {
  //       path: "mobiles",
  //       element: <Mobiles/>
  //     },
  //     {
  //       path: "phones",
  //       element: <Phones/>
  //     },
  //     {
  //       path: "laptops",
  //       element: <Laptops/>
  //     },
  //     {
  //       path: "shoes",
  //       element: <Shoes/>
  //     }
  //   ]
  // },  
  // {
  //   path: "services",
  //   element: <Services/>
  // }
  ]
},
// {
//   path: "signup",
//   element: <RegisterForm/>
// },
// {
//   path: "signin",
//   element: <Login/>
// }
{
  path: "/",
  element: <Layout2/>,
  children: [
    {
      path: "signup",
      element: <Register/>
    },
    {
      path: "signin",
      element: <Login/>
    }
  ]
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = { route }>
      <ToastContainer>
        <App />
      </ToastContainer>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
