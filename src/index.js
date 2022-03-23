import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import RegisterProvider from "./context/registration";

ReactDOM.render(
  <React.StrictMode>
    <RegisterProvider>
      <App />
    </RegisterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
