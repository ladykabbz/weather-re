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
        <a href="https://github.com/ladykabbz/weather-re" target="blank">
          Open-source code
        </a>
        , by nicole kabii
      </h5>
    </div>
  </React.StrictMode>
);
