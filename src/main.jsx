import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const basePath = import.meta.env.VITE_BASE_PATH || "/";
const routerBaseName = basePath === "/" ? undefined : basePath.replace(/\/$/, "");

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={routerBaseName}>
    <App />
  </BrowserRouter>,
);
