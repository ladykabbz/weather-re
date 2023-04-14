import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Weather from "./weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <h5>
        <a href="" target="_blank">
          Open-source code
        </a>
        , by nicole kabii from <a href=" #addlink ">She Codes</a>
      </h5>
    </div>
  </React.StrictMode>
);
