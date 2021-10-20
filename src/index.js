import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";

import "./sass/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
