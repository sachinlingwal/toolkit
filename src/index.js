import React from "react";
import App from "./App";
import "./index.css";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
