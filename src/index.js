import React from "react";
import { createRoot as reactDom } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";

const root = reactDom(document.querySelector("#root"));
root.render(<App />);
