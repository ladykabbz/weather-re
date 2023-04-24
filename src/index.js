import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Og from "./og";
import Weather from "./weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="App">
      {/* <Og /> */}
      <Weather defaultCity="nairobi" />
    </div>
  </React.StrictMode>
);
