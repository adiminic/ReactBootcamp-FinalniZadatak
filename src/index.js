import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import "antd/dist/antd.css";
import { ContextAPI } from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextAPI>
    <App />
  </ContextAPI>
);
