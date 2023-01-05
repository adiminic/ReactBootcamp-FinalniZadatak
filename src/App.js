import LoginPage from "./pages/LoginPage";
import "./App.css";
import "antd/dist/antd.css";
import TodoList from "./components/TodoList";
import { useData } from "./utils/useData";

function App() {
  //const { isLoggedIn } = useData();
  const { isLoggedIn } = true;
  return (
    <div>
      {console.log(isLoggedIn)}
      {isLoggedIn && <LoginPage />}
      {!isLoggedIn && <TodoList />}
    </div>
  );
}

export default App;
