import React, { useCallback, useEffect, useState } from "react";

export const GlobalContext = React.createContext();

export const ContextAPI = ({ children }) => {
  const [data, setData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchData = useCallback(() => {
    const url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result.slice(0, 10)))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetchData();

    /*     fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => {
        setData(result.slice(0, 10));
      }); */
  }, [fetchData]);

  const removeTodo = (id) => {
    setData(() => {
      return data.filter((p) => p.id !== id);
    });
  };

  const returnMaxId = (data) => {
    return Math.max(...data.map((p) => p.id));
  };

  const addTask = (userId, id, title, completed) => {
    setData(() => {
      return data.unshift({
        userId: userId,
        id: id,
        title: title,
        completed: completed,
      });
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        setIsLoggedIn,
        removeTodo,
        addTask,
        returnMaxId,
        data,
        isLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
