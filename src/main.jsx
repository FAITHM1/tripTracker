import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "milligram";
import "./style.scss"
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
