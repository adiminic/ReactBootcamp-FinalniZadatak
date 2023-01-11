import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "antd/dist/antd.css";
import { ContextAPI } from "./context/Context";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AddToDoPage from "./pages/AddToDoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextAPI>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="login" index element={<LoginPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="add" element={<AddToDoPage />} />
        </Route>
      </Routes>
    </ContextAPI>
  </BrowserRouter>
);
