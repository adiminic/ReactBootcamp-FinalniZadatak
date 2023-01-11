import { Button } from "antd";
import { Link } from "react-router-dom";
import { useData } from "../utils/useData";
import Todo from "./Todo";

const TodoList = (props) => {
  const { data } = useData();
  console.log(data);
  return (
    <div className="text-center">
      <Link to="/home">
        <Button className="flex rounded-lg" type="success" htmlType="button">
          Add
        </Button>
      </Link>
      <ul className="inline-block list-none">
        {data.map((todo) => (
          <div className="item">
            <li key={todo.id}>
              <Todo {...todo} />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
