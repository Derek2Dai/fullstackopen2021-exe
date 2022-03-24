import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// const noteArray = [
//   {
//     id: 1,
//     content: "aaa",
//     date: new Date("2012", "08", "03", "01", "03", "12"),
//     importance: Math.random() < 0.5,
//   },
//   {
//     id: 2,
//     content: "dddd",
//     date: new Date("2020", "02", "12", "13", "03", "24"),
//     importance: Math.random() < 0.5,
//   },
// ];
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
