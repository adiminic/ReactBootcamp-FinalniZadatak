import { useState } from "react";
import { useData } from "../utils/useData";

const AddToDoPage = () => {
  const [userId, setUserId] = useState();
  const [title, setTitle] = useState();
  const [completed, setCompleted] = useState();

  const { data } = useData();
  const { returnMaxId, addTask } = useData();

  const handleSubmit = () => {
    const id = returnMaxId(data) + 1;
    addTask(id, userId, title, completed);
  };
  return (
    <>
      <div className="h-full ">
        <h1 className="font-3xl mb-6">Add a new blog!</h1>
        <form className="relative w-full items-center" onSubmit={handleSubmit}>
          <label className="text-xl">UserId</label>
          <input
            className="block w-full px-2 py-1 my-2 box-decoration-clone rounded-lg border-2"
            type="number"
            required
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <label className="text-xl">Title</label>
          <textarea
            className="block w-full px-2 py-1 my-2 box-decoration-clone rounded-lg border-2"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="text-xl">Completed</label>
          <select
            className="block w-full px-2 py-1 my-2 box-decoration-clone rounded-lg border-2"
            value={completed}
            onChange={(e) => setCompleted(e.target.value)}
          >
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
          <button
            className="my-4 transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
            on
          >
            Add TODO
          </button>
        </form>
      </div>
      <div className="grid grid-cols-3 h-64 gap-6">
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <div className="sticky top-5"></div>
        </div>
      </div>
    </>
  );
};

export default AddToDoPage;
