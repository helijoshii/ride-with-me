import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import { heli } from "./App.jsx";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({ onoffline() {} });

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={heli} />
);
