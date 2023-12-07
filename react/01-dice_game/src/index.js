import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const product = "MacBook";
const price = "2000";
root.render(<App productName={product} price={price} />);
// root.render(
//   <div>
//     <h1>나만의 {product} 주문하기</h1>
//   </div>
// );
