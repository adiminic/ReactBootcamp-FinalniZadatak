import LoginPage from "./pages/LoginPage";
import "./App.css";
import "antd/dist/antd.css";
import { useData } from "./utils/useData";
import HomePage from "./pages/HomePage";

function App() {
  const { isLoggedIn } = useData();

  return (
    <div>
      {console.log(isLoggedIn)}
      {!isLoggedIn && <LoginPage />}
      {isLoggedIn && <HomePage />}
    </div>
  );
}

export default App;
