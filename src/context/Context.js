import React, { useState, useEffect } from "react";
import { fetchData } from "../fetch/fetchData";

export const GlobalContext = React.createContext();

export const ContextAPI = ({ children }) => {
  const [data, setData] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetchData().then((result) => {
      setData(result.slice(0, 10));
    });
  }, []);

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
