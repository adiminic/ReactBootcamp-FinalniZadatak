import LoginPage from "./pages/LoginPage";
import "./App.css";
import "antd/dist/antd.css";
import { useData } from "./utils/useData";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import AddToDoPage from "./pages/AddToDoPage";

function App() {
  const { isLoggedIn } = useData();

  return (
    <>
      {/* <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/add" element={<AddToDoPage />} />
      </Routes> */}
      {!isLoggedIn && <LoginPage />}
      {isLoggedIn && <HomePage />}
    </>
  );
}

export default App;
