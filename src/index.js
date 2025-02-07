import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <noscript>
      <p>
        <img
          referrerpolicy="no-referrer-when-downgrade"
          src="//localhost/matomo.php?idsite=3&amp;rec=1"
          style="border:0;"
          alt=""
        />
      </p>
    </noscript>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
