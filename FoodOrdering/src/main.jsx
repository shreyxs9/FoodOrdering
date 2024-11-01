import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  Body from './Body' 
import {createBrowserRouter ,RouterProvider} from 'react-router-dom' ;
import  About from './About.jsx'
import Error from './Error.jsx';
import RestrauntMenu from './RestrauntMenu.jsx'
import Cart from './Cart.jsx'
const Grocery = lazy(() => import("./Grocery.jsx"));


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children: [
  {
    path:'/about',
    element:<About/>,
  },
  {
    path:'/',
    element:<Body/>
  },
  {
    path:'/grocery',
    element:<Grocery/>
  },
  {
    path:'/restraunts/:resId',
    element:<RestrauntMenu/>
  },
  {
    path:'/cart',
    element:<Cart/>
  },
  
],
  },
  {
    path: '*', // This will match any undefined route
    element: <Error/> // Define a NotFound component for the 404 page
  }
  ]);
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
