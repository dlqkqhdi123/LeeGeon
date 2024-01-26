import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import State from "./state.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const product = "MacBook";
const price = "2000";
root.render(<App productName={product} price={price} />);
// root.render(<State />);
