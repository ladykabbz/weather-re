import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Og from "./og";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <Og />
    </div>
  </React.StrictMode>
);
