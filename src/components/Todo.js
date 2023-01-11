import { Button } from "antd";
import { useData } from "../utils/useData";

const Todo = ({ userId, id, title, completed }) => {
  const { removeTodo } = useData();
  return (
    <div className="justify-items max-w-md p-4 m-5 bg-blue-100 rounded-xl">
      <p className="flex justify-start">{title}</p>
      {completed ? (
        <p className="flex justify-start text-green-600">Completed</p>
      ) : (
        <p className="flex justify-start text-red-500">Not completed</p>
      )}
      <Button
        className="flex rounded-lg"
        type="danger"
        htmlType="button"
        onClick={removeTodo({ id })}
      >
        Remove
      </Button>
    </div>
  );
};

export default Todo;
