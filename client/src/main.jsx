import React from 'react'

import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.css'
import App from './App';
import Home from './home/home';
const router=createBrowserRouter(

[
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<h1>landing page</h1>

      },
      {
        path:"home",
        element:<Home/>
      }
    ]
  }
]


)
ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router}  />

);
