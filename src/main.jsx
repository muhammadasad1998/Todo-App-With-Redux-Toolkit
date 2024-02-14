import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router_App from "./config/Router_App.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router_App />
    </Provider>
  </React.StrictMode>
);
