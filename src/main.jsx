import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./fonts.css";

import { Provider } from "react-redux";
import store from "./redux/store.js";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {  Home } from "./pages/index.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
