import React from "react";
import ReactDOM from "react-dom";
import { Navbar } from "./components/homepage/Navbar";
import { Footer } from "./components/homepage/Footer";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <App />
      <Footer/>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
